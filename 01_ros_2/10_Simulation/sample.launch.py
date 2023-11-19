# Imports
import xacro, os
from ament_index_python.packages import get_package_share_directory
from launch import LaunchDescription
from launch.substitutions import PathJoinSubstitution
from launch_ros.actions import Node
from launch_ros.substitutions import FindPackageShare



# ROS2 launch description
def generate_launch_description():

    # Declare arguments
    share_pkg_dir = get_package_share_directory("ur_coppeliasim")
    xacro_path = os.path.join(share_pkg_dir, "urdf", "ur.urdf.xacro")
    available_joint_controllers = os.path.join(
        share_pkg_dir, "config", "ur_controllers_coppelia.yaml"
        )
    declared_arguments = []
    use_sim_time = True
    ur_type = "ur3e"

    robot_description_content = xacro.process_file(
        xacro_path,
        mappings={
            "safety_limits": "true",
            "safety_pos_margin": "0.15",
            "safety_k_position": "20",
            "name": "ur",
            "ur_type": ur_type,
            "prefix": '',
            "sim_ignition": "false",
            "sim_gazebo": "false",
            "simulation_controllers": available_joint_controllers
            }
        ).toprettyxml(indent=' ')
    robot_description = {"robot_description": robot_description_content}
    robot_controllers = available_joint_controllers

    # Control node
    control_node = Node(
        package="controller_manager",
        executable="ros2_control_node",
        parameters=[
            robot_description, robot_controllers, {
                "use_sim_time": use_sim_time
                }
            ],
        output="both",
        remappings=[
            ('motion_control_handle/target_frame', 'target_frame'),
            ('cartesian_motion_controller/target_frame', 'target_frame'),
            ]
        )

    # Joint broadcaster
    joint_state_broadcaster_spawner = Node(
        package="controller_manager",
        executable="spawner",
        arguments=["joint_state_broadcaster", "-c", "/controller_manager"],
        parameters=[{
            "use_sim_time": use_sim_time
            }]
        )

    # Cartesian motion controller
    cartesian_motion_controller_spawner = Node(
        package="controller_manager",
        executable="spawner",
        arguments=["cartesian_motion_controller", "-c", "/controller_manager"],
        parameters=[{
            "use_sim_time": use_sim_time
            }]
        )

    # Motion handle
    motion_control_handle_spawner = Node(
        package="controller_manager",
        executable="spawner",
        arguments=["motion_control_handle", "-c", "/controller_manager"],
        parameters=[{
            "use_sim_time": use_sim_time
            }]
        )

    # State publisher
    robot_state_publisher = Node(
        package="robot_state_publisher",
        executable="robot_state_publisher",
        output="both",
        parameters=[robot_description, {
            "use_sim_time": use_sim_time
            }],
        )

    # RViz
    rviz_config = PathJoinSubstitution([
        FindPackageShare("cartesian_controller_simulation"), "etc", "robot.rviz"
        ])
    rviz = Node(
        package="rviz2",
        executable="rviz2",
        name="rviz2",
        output="log",
        arguments=["-d", rviz_config],
        parameters=[{
            "use_sim_time": use_sim_time
            }]
        )

    # Final launch description
    nodes = [
        control_node,
        joint_state_broadcaster_spawner,
        cartesian_motion_controller_spawner,
        motion_control_handle_spawner,
        robot_state_publisher,
        rviz,
        ]

    return LaunchDescription(declared_arguments + nodes)
