Package creation
================

Packages can be created with different programming languages, mainly `python` and `C++`.

Python package creation
-----------------------

Once inside the `src` folder inside a workspace, a new python package (e.g. ``my_package``) can be created with
the command

.. code-block:: shell

   ros2 pkg create --build-type ament_python my_package --dependencies rclpy

where in this case the lonely dependency is the one for the ROS2 python library `rclpy`.
This create the following file tree:

.. code-block:: shell

   /workspace/src/my_package
   ├── my_package
   │   └── __init__.py
   ├── package.xml
   ├── resource
   │   └── my_package
   ├── setup.cfg
   ├── setup.py
   └── test
       ├── test_copyright.py
       ├── test_flake8.py
       └── test_pep257.py

Executable scrips must be placed inside the folder with the same name of the initialized
package (in this case `my_package`) where an empty ``__init__.py`` is already present.

Launch files integration
^^^^^^^^^^^^^^^^^^^^^^^^
Since :ref:`launch files<launch-files>` will more than likely to be required for a new package,
it can be useful to create a `launch` folder in which to store such entries; once in the
root directory of the packages

.. code-block:: shell

   mkdir launch

To automatically copy launch files during package builds, update the ``setup.py`` file
as shown here

.. code-block:: python

   # In the import section
   import os
   from glob import glob

   # Later in the file
   data_files=[
       ('share/ament_index/resource_index/packages',    # already present
           ['resource/' + package_name]),
       ('share/' + package_name, ['package.xml'])       # already present,
       (os.path.join('share', package_name), glob('launch/*.launch.py')),
   ],


Adding executables
^^^^^^^^^^^^^^^^^^

As previously mentioned, *.py* executables must be inserted inside the folder
with the same name of the package.

As good practise, its recommended to include the *main* inclusion guard for the python
executable. The barebone of a script could be

.. code-block::

   #!/usr/bin/env python3
   # imports


   def main(args=None):
       # main function
       pass


   if __name__ == '__main__':
       main()

A fundamental step is to add the executable to the ``setup.py`` file, in the
``entry_points`` section as follows

.. code-block::

   setup(
       # ...
       entry_points={
           'console_scripts': [
               '<executable_name> = <package_name>.<script_name>:main',
           ],
       },
       # ...
   )

In particular the ``<executable_name>`` is the name of the executable that needs to be
called in the *launch* file ``<script_name>`` is the name of the script file that has
been developed (and do not necessarily needs to be the same as the executable name).

C++ package creation
--------------------
*C++* packages can be create similarly to python ones just by changing the build type

.. code-block:: shell

   ros2 pkg create --build-type ament_cmake <package_name> --dependencies <dependencies>

In this case the resulting package structure is different:

.. code-block:: shell

   /workspace/src/<package_name>
   ├── CMakeLists.txt
   ├── include
   │   └── <package_name>
   ├── package.xml
   └── src

Applications (*.cpp* files) should be developed inside the *src* folder, while the
*include* folder should contain the header files.

CMake integration
^^^^^^^^^^^^^^^^^

Once source code is developed, the CMake file must be updated in order to correctly build
and install the targets:

Once source code is developed, the CMake file must be updated in order to correctly build
and install the targets. Bare example to add

.. code-block:: CMake

   # Initialixe the executable my_node with the source code simple_node.cpp
   add_executable(my_node src/simple_node.cpp)
   ament_target_dependencies(my_node rclcpp)        # add dependency to rclcpp

   install( # copy target to the lib folder inside the install space
      TARGETS my_node
      DESTINATION lib/${PROJECT_NAME}
   )

   install( # copy launch files to the share folder inside the install space
      DIRECTORY launch
      DESTINATION share/${PROJECT_NAME}
   )

.. note::

   The name of the target is the one that should be used as executable name in the launch file.
   It is assumed that launch files are placed inside the *launch* folder and the
   *install* directive must be inserted to copy them to the install space.
