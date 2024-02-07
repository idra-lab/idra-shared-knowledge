# Teleoperated Ultrasonography Setup and Demo Guide
This is the IDRA guide to replicate the Teleoperated Ultrasonography.

## Required Hardware
- Robotic arm (currently supported: UR3e);
- Haptic Device (current supported: Haption Desktop 6D);
- Computer with Ubuntu 22.04 and ROS2 to control the arm;
- F\T Sensor (current supported: Bota SensONE);
- Ultrasound probe;
- Ethernet router with at least 4 ports;

### Optional
- Android phone for ultrasound feedback;
- VR Headset (current supported: Meta Quest);
- Computer with Windows and Unity to run the VR envirnonment;
- RGBD Camera (current supported: RealSense D435);

## Connections
- The Haption haptic device (192.168.100.53) is connected through Ethernet with the Ubuntu computer (192.168.100.50).
- The other devices (robotic arm, F\T sensor, Ubuntu computer, Windows computer if VR) are connected with the Ethernet router;
- Android phone connected with USB;
- RGBD Camera connected with USB;

## Required Software and Dependencies
- [ROS 2 UR Driver](https://github.com/UniversalRobots/Universal_Robots_ROS2_Driver)
- [ROS 2 Cartesian impedance controller](https://github.com/fzi-forschungszentrum-informatik/cartesian_controllers/tree/ros2);
- [Bota F/T Sensor Drivers](https://github.com/idra-lab/bota_ft_sensor_driver);
- [ROS 2 Haption Drivers](https://github.com/idra-lab/haptic_interface_ROS2);


## Instructions
<!-- Davide's part to be checked and reorganized -->

### Desktop pc - Robot connection
1. Connect the UR3e and the Bota F/T sensor to the router via ethernet (bota's cable must be alimented)
2. Connect the pc to the router via ethernet
3. Set the ip of the desktop for the router's network to 192.168.1.100 (also check that
   the UR3e has 192.168.1.102) as described [here](https://github.com/UniversalRobots/Universal_Robots_ROS2_Driver/blob/60f26aaea80e43254080d39a27d7a2ae5e5458e8/ur_robot_driver/doc/installation/robot_setup.rst). You can test the connection with
   ```
   ping 192.168.1.102
   ```
4. Boot the robot and set it to "Remote control" if it is in "Local control"
5. Sourcinig ros workspaces:
   ```
   source ~/ur3_ros2/ur_ws/install/setup.bash # (or setup.zsh)
   source ~/ur3_ros2/bota_ws/install/setup.bash # (or setup.zsh)
   source ~/ur3_ros2/controller_ws/install/setup.bash
   ```

6. Test Drivers:
    Launch bota sensor
    ```
    ros2 launch rokubimini_ethercat rokubimini_ethercat.launch.py
    ```
    Launch robot driver

    ```
    ros2 launch ur_robot_driver ur_control.launch.py robot_ip:=192.168.1.102 ur_type:=ur3e
    ```
    You should be able to move the robot to

### Desktop pc - Haptic inteface
1. Connect the haptic interface directly on the ethernet port of the desktop pc.
2. Set the desktop's ip of that connection to 192.168.100.53 (you can ping also this time to test connection)
3. IMPORTANT: the haptic device must be manually calibrated every time you boot it. You have to:
  - Make sure the green power button is unpressed
  - Source haption workspace
    ```
    source ~/haption_ws/install/setup.bash
    ```
  - In one terminal launch the haptic node:
    ```
    cd ~/haption_ws
    . entrypoint.sh
    . start_RaptorApiWrapper..something.sh
    ```
  - In another terminal
    ```
    . start_TestCalibration.sh
    ```
    It will ask you to push the green button to power the haptic interface.
    If the operation succeded you can kill both nodes.

<!-- ### Desktop pc - Realsense connection
1. Connect the realsense through the usb-c cable to the pc -->

### Android phone
1. I don't remember the name of the app (I changed phone) but if you search the probe name
    you should find it easily, it was something like "wireless ecg" maybe. Download it.
2. Turn on the probe keeping pressed the center blue button
3. Connect to the wifi of the probe (password of the wifi probe is written in the label behind it I think you have to write it lowercase)
4. Enable debug USB on that phone (this is necessary for streaming the app view to Unity)
    - To do it enable developer settings (depends on every smartphone model but it is just a matter
  of pressing many times the kernel type on the settings (you can look online))
    - When developer settings are enabled, go in Settings->Developer Settings and enable Debug USB
5. Finally connect the phone to the pc with usb cable. Keep it unlocked to avoid streaming interruption.

### Desktop pc: Launch the demo
1. In a terminal where the ``ur_ws`` and ``bota_ws`` workspaces are sourced run:
    ```
    source ~/ur3_ws/nardi_ws/install/setup.sh
    ```
    Launch the complete environment:
    ```
    ros2 launch motion_planner full_env.launch.py
    ```
    This will load:
    - robot driver
    - bota driver
    - realsense_node
    - point cloud filter node
    - android screen broadcasting

### Desktop pc: stream the topics to Unity
1. I create an apposite script which should be located in the ``haption_ws`` workspace.
    It had a name like "tcp_endpoint.sh". You have to run it in one terminal.

### Laptop pc:
1. Connect the pc via ethernet to the router. You should modify your ip to be under the same net
   of the desktop pc. There should be a txt file called "ip_tables.txt" on the Desktop that tells you the correct one. You can try pinging desktop pc and viceversa to check if the ip is a correct one.
2. Launch UnityHub. Select the last project and open it.
    It will run Unity with the hospital scene.
3. On top in Robotics -> ROS Settings check that the ros host ip is the one of the desktop pc. This enables the topic communication.
4. WORTH Checking: It might be that I correctly create a scene for the health lab. Check if there is: "UR3eSCENE_health_room.unity" in the assets. Doubleclick to open. It should be missing of some last improvements like hand tracking but it can save you some work. Otherwise do point 5.
5.  You should adjust the pointcloud streaming position with respect to the real body model since Luigi wants to change environment 🤯. Probably the bed has a different height wrt to the lab's table so you should also increase Z axis of the bed and rotation of the camera. My suggestion to do this is:
    - EASY: I can do it remotely with AnyDesk or TeamView
    - MEDIUM(DIY): Select the PCStreaming object in the left panel and in the right-side inspector  and set the position from there. You should enter play mode to check the effectively current position of the streamed pointcloud. You can make the process faster adjusting the position in play mode, copying the transform, stop play mode and pasting the transform. To copy the position go in the right-side inspector->Transform press the 3 little dots and do Copy-> Position(World)

### VR Headset:
1. Boot it up keeping pressed lateral button.
2. Connect it to the pc through usb-c cable (my white long cable should be there), you should see a request in the vr for allowing data exchange
3. You should enter the Air Link room, better if I explain it to you in call.

### Laptop pc: Test application
1. When the scene is ready press play having the vr connected and the Oculus app runnig. This should stream the environment in the app and this should enable the view of the pointcloud if the desktop demo is running.

## FINALLY LAUNCH EVRYTHING:
When everything works and evrything is properly connected do this:
    1. Launch the desktop demo
    2. Launch Unity App
    3. Launch the haptic control node in a terminal:
   ```
   ros2 launch haptic_control haptic_control.launch.py haption_ws_path:=/home/robotics/haption_ws/
   ```
    4. When the control starts remember to press the green button on the haptic interface to enable force feedback
