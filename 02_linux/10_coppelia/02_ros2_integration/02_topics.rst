ROS2 simulation interface
=========================

Coppelia does not provide a *standard* interface with the ROS simulator, but nodes must
be programmed in the Coppelia environment to exchange data.

For this purpose, the preferred scripting language is `LUA <https://www.lua.org/>`_, which
is faster than Python (that's another alternative in Coppelia).

Scritps are bounded to objects in Coppelia: for this reason it is recommended to write code
that belongs to the object itself, and not to the scene, so that if the entity is copied
and pasted in other projects, the programmed interface is preserved.

.. note::

   To see the list of all available API function, look
   `here <https://www.coppeliarobotics.com/helpFiles/en/apiFunctions.htm>`_.

.. _coppeliasim_ros2_robot_script:

Robot simulation
----------------

This is an example scritp for a kinematic simulation of a robot in Coppelia that provide
a good understanding of the interface principle. Here the code will be splitted up and
explained in details; the whole script can be found :ref:`here <02_ros2_robot_integration>`.

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 2-8

This is a simple used-defined function that allows to initialize a table with ``n`` equal
elements ``value``; this is useful, as example, for the initialization of the joint handles or maximum
joint properties

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 11-16

Here it is reported the initialization of main variables; ``q_home`` is the home configuration
of the robot (in the joint space), while ``joints`` is is a placeholder that will contain
the Coppelia handles of the joints of the robot (i.e. the joint object inside the Coppelia
object tree).
For sake of simplicity, the initial target is set to the home configuration, while joint
limits (for both velocity, acceleration and jerk) are initialized to values that are
constant for all joints.

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 20-26

This function is the callback from the ROS2 subscriber (that will be initialized later);
it takes the desired joint configuration for the system and sets the ``target`` accordingly.
The ``msg_received`` boolean flag is used to assert when a new correct message is arrived.
After processing of during the actuation step of the simulation, the flag will be set to ``false`` again.

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 30-42, 45-49

This function implements the interface with coppelia that sets the target joint configuration
for the kinematic simulation of the robot. The ``handles`` are the joints that are commanded
with the specified joint limits. Internally the function collects the current state of
the robot (i.e. joint position and velocity) and calls the built-in ``sim.moveToConfig``
`documented here <https://www.coppeliarobotics.com/helpFiles/en/regularApi/simMoveToConfig.htm>`_.

The ``mov_callback`` function is the callback that processes the result of the ``sim.moveToConfig``.

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 53-75

The ``sysCall_init`` function is the initialization function that is called automatically
by Coppelia at the beginning of the simulation, thus is used to initialize different elements.

In this case a ROS2 topic subscriber and publisher are initialized; the former reads
the desired joint configuration (that's actually computer by a ROS controller) while the
latter publishes the current joint configuration of the robot.

Then, the ``joints`` handler are initialized by binding the associated Coppelia objects.
Furthermore, the robot is initially commanded to reach the home configuration.

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 79-84

The ``sysCall_actuation`` is the function that is called at each actuation step of the
simulation. In this case it checks if a new target position has been received from the
publisher and, if so, it calls the ``move_to_config`` function to update the simulation
target state.

.. literalinclude:: 02_ros2_integration/script.lua
   :language: lua
   :lines: 88-112

Finally, the ``sysCall_sensing`` function is called at each sensing step of the simulation;
in this case it reads the current joint configuration and publishes it to the ROS2 topic
as defined in the initialization.
