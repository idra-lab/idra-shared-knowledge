.. _launch-files:

Launch files
============

Launch files can be used to start multiple nodes at once from the same script.
They are usually placed inside the *launch* directory of the package, and files are named
``<file_name>.launch.<format>`` where the format can be either ``py``, ``yaml`` or ``xml``.
The complete official documentation can be found
`here <https://docs.ros.org/en/iron/Tutorials/Intermediate/Launch/Creating-Launch-Files.html>`_.

Python based launch files are as follows:

.. code-block:: python

   from launch import LaunchDescription
   from launch_ros.actions import Node

   def generate_launch_description():
       return LaunchDescription([
           Node(
               package="<package_name>",
               executable="<executable_name>",
               output="screen"),
       ])

The ``LaunchDescription`` takes as input a list of nodes: that's how multiple of them
can be started.
