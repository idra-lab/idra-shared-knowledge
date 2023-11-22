Messages
--------

CoppeliaSim has a ros2 workspace internally which is used to build required ROS2 messages.
Messages that needs to be build must be specified inside the folder

.. code-block:: bash

   $COPPELIASIM_ROOT_FOLDER/programming/ros2_packages/sim_ros2_interface/meta

In particular inside the file ``interfaces.txt`` must be listed all the required messages,
for instance

.. code-block:: bash

   geometry_msgs/msg/Wrench
   geometry_msgs/msg/WrenchStamped
   std_msgs/msg/MultiArrayDimension
   std_msgs/msg/MultiArrayLayout
   std_msgs/msg/Float64MultiArray
   sensor_msgs/msg/JointState
   rosgraph_msgs/msg/Clock

.. note::

   To automatically append messages to the file ``interfaces.txt``,
   you might want to use the following command:

   .. code-block:: bash

      cat << EOF >> $COPPELIASIM_ROOT_FOLDER/programming/ros2_packages/sim_ros2_interface/meta/interfaces.txt

   In this way you can write the list of messages to be appended. Once all messages have been
   listed, write ``EOF`` on a new line and press enter to apply changes.

   As example:

   .. code-block:: bash

      cat << EOF >> $COPPELIASIM_ROOT_FOLDER/programming/ros2_packages/sim_ros2_interface/meta/interfaces.txt
      geometry_msgs/msg/Wrench
      geometry_msgs/msg/WrenchStamped
      std_msgs/msg/MultiArrayDimension
      std_msgs/msg/MultiArrayLayout
      std_msgs/msg/Float64MultiArray
      sensor_msgs/msg/JointState
      rosgraph_msgs/msg/Clock
      EOF


Workspace build
---------------

After required messages have been configured, the ROS2 workspace must be built. This can
be accomplished with the following command:

.. code-block:: bash

   cd $COPPELIASIM_ROOT_FOLDER/programming/ros2_packages/sim_ros2_interface
   colcon build --symlink-install

.. note::

   In case of compilation errors, try the following command:

   .. code-block:: bash

      VERBOSE=1 MAKEFLAGS=-j1 colcon build --symlink-install --event-handlers console_direct+ --parallel-workers 1
