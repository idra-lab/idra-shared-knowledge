-- Custom function that fills a table with a replica of 'n' same 'value'
function table.fill(value, n)
    local t = {}
    for i = 1, n do
        table.insert(t, value)
    end
    return t
end

-- Global declarations
q_home = {1.57, -1.57, 1.57 , -1.57, -1.57, 0.0}
joints = table.fill(nil, 6)
target = q_home
local max_vel = table.fill(180 * math.pi / 180, 6)
local max_acc = table.fill(40 * math.pi / 180, 6)
local max_jerk = table.fill(80 * math.pi / 180, 6)


-- Callback function of the ROS subscriber
function apply_joint_position(ros_msg)
    target = ros_msg.data
    if(tostring(target[1]) == "nan") then
        return
    end
    msg_received = true
end


-- Function that transforms the target configuration into movements for Coppelia
function move_to_config(handles, max_vel, max_acc, max_jerk, target_pos)
    local current_pos = {}
    local current_vel = {}

    for i=1,#handles,1 do
        current_pos[i] = sim.getJointPosition(handles[i])
        current_vel[i] = sim.getJointVelocity(handles[i])
    end

    sim.moveToConfig(-1, current_pos, current_vel, nil, max_vel, max_acc, max_jerk,
                     target_pos, nil, mov_callback, handles)
end


-- Callback function of the moveToConfig function builtin in Coppelia
function mov_callback(target_pos,vel,acc,handles)
    for i = 1, #handles, 1 do
            sim.setJointTargetPosition(handles[i],target_pos[i])
    end
end


-- Implementation of the function that's called when the simulation starts
function sysCall_init()
    if simROS2 then
        publisher = simROS2.createPublisher(
            '/coppelia_joint_states',
            'sensor_msgs/msg/JointState'
            )
        subscriber = simROS2.createSubscription(
            '/coppelia_set_joints',
            'std_msgs/msg/Float64MultiArray',
            'apply_joint_position'
            )
    end

    joints[1] = sim.getObject('/shoulder_pan_joint')
    joints[2] = sim.getObject('/shoulder_lift_joint')
    joints[3] = sim.getObject('/elbow_joint')
    joints[4] = sim.getObject('/wrist_1_joint')
    joints[5] = sim.getObject('/wrist_2_joint')
    joints[6] = sim.getObject('/wrist_3_joint')

    move_to_config(joints, max_vel, max_acc, max_jerk, target)
    msg_received = true
end


-- Function called during the actuation step of the simulation
function sysCall_actuation()
    if msg_received == true then
        move_to_config(joints, max_vel, max_acc, max_jerk, target)
        msg_received = false
    end
end


-- Function called during the sensing step of the simulation
function sysCall_sensing()
    local curr_pos = {}
    local curr_vel = {}
    local curr_torque = {}
    for i=1, #joints, 1 do
        curr_pos[i] = sim.getJointPosition(joints[i])
        curr_vel[i] = sim.getJointVelocity(joints[i])
        curr_torque[i] = sim.getJointForce(joints[i])
    end

    local msg ={
        header={
            stamp = simROS2.getSystemTime(),
            frame_id = 'robot_base'
        },
        name = {
            'shoulder_pan_joint', 'shoulder_lif_joint', 'elbow_joint',
            'wrist_1_joint', 'wrist_2_joint', 'wrist_3_joint'
        },
        position = curr_pos,
        velocity = curr_vel,
        effort = curr_torque
    }
    simROS2.publish(publisher, msg)
end
