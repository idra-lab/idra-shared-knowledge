Launch file
===========

Coppelia simulator does not provide a ROS interface to start the simulation itself.
Therefore, the simulator must be started manually (e.g. ``$COPPELIASIM_ROOT/coppeliaSim.sh``),
the proper ``.ttt`` scene must be selected and the simulation enabled.

After that, the ROS2 launch file can be used to start the ROS2 nodes. In the following,
the different section of the launch file are explained in detail; the complete version
of the script can be found :ref:`here <simulation_launch_file>`.

.. literalinclude:: nospace_sample.launch.py
   :start-after: # Import
   :end-before: # ROS2 launch description

As usual, first all required packages are imported.

.. literalinclude:: nospace_sample.launch.py
   :start-after: # ROS2 launch description
   :end-before: # Declare arguments

Then its defined the function used by ROS2 that configures and starts all different
required nodes.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # Declare arguments
   :end-before: # Control node

In this section some relevant resources are loaded. Given the share directory of the
package (that in this case is assumed to be called *ur_coppeliasim*), the list of availabe
controllers for the controller manager are loaded.
Then, the URDF model is compiled starting from the *xacro* file of Universal Robots models;
such file contains generic description of all UR models, and in this case the *ur3e* model
is selected. Important is that both gazebo classic and gazebo ignition are disabled,
since the simulator used is CoppeliaSim.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # Control node
   :end-before: # Joint broadcaster

This defines the configuration of the controller manager. Relevant is the configuration
of the ``use_sim_time`` parameter: in this case it is set to *true*, to have a synchronization
with the simulator. For instance, simulation might be slower than real time when it becomes
more complex, or in case the simulation is trivial, it can be accelerated.
Furthermore, some topics are remapped for ease of use and sake of demonstration, e.g.
``/motion_control_handle/target_frame`` is remapped to ``/target_frame``.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # Joint broadcaster
   :end-before: # Cartesian motion controller

This configures the joint state broadcaster node, bounding it to the controller manager
defined above. More details of the arguments to use for the controller manager *spawner*
can be found `here <https://control.ros.org/humble/doc/ros2_control/controller_manager/doc/userdoc.html#spawner>`_.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # Cartesian motion controller
   :end-before: # State publisher

Similarly, here the controller manager spawner is used to start the cartesian motion controller,
whose parameters have been loaded in the ``available_joint_controllers`` variable above.
In the same way, the handle that can be moved from RViz is configured.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # State publisher
   :end-before: # RViz

Here the robot state publisher is loaded.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # RViz
   :end-before: # Final launch description

Here RViz is started with a configuration that has been defined in another package,
in particular from ``cartesian_controller_simulation``.

.. literalinclude:: nospace_sample.launch.py
   :dedent: 4
   :start-after: # Final launch description

Finally, all defined nodes are grouped in a list that will consistitute the final
launch description.
