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

If particular ``data_files`` is a list of tuple. Each tuple contains the destination
path on which data will be copied (relative to the *install* space of the ROS workspace),
while the second element is a list of files to be copied (relative to the package source root).
In this particular case we *glob* all launch files that are included in the *launch* folder.

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
and install the targets. Bare example to add:

.. code-block:: cmake

   # Declare your CMake version
   cmake_minimum_required(VERSION 3.5)
   # Declare project's name (the same of the one in the package.xml)
   project(simple_node_pkg_name)
   
   # Exploit CMake's macros to find the required dependencies
   # This is required by colcon
   find_package(ament_cmake REQUIRED)
   # This will tell CMake to find the rclcpp library in your OS
   find_package(rclcpp REQUIRED)
   # If you need to use some specific ROS2 msg (for example sensor_msgs)
   find_package(sensor_msgs REQUIRED)
   # If you need other libraries like eigen you have to find them too
   find_package (Eigen3 3.3 REQUIRED NO_MODULE)
   
   # Initialise the executable my_node with the source code simple_node.cpp
   add_executable(my_node src/simple_node.cpp)
   
   # If you put some headers inside the 'include' folders, then you have to import them.
   target_include_directories(my_node include)
   
   # Link the dependencies to your node
   ament_target_dependencies(my_node rclcpp sensor_msgs Eigen3::Eigen)
   
   install( # copy target to the lib folder inside the install space
      TARGETS my_node
      DESTINATION lib/${PROJECT_NAME}
   )
   
   install( # copy launch files to the share folder inside the install space
      DIRECTORY launch
      DESTINATION share/${PROJECT_NAME}
   )
   
   ament_package()

.. note::

   The name of the target is the one that should be used as executable name in the launch file.
   It is assumed that launch files are placed inside the *launch* folder and the
   *install* directive must be inserted to copy them to the install space.


Mixed package creation (C++ and Python)
---------------------------------------
There is also the possibility to extend a C++ package in order to run also Python nodes.
In order to do it you have to create a ``scripts`` folder inside your package.
Then modify the CMake accordingly:

.. code-block:: cmake

   # Find the ROS2 Python package
   find_package(rclpy REQUIRED)
   
   #...

   # Install Python modules
   ament_python_install_package(${PROJECT_NAME})
   # Install Python executables
   install(PROGRAMS
   scripts/your_python_node_name.py
   DESTINATION lib/${PROJECT_NAME}
   )

You also need to update the ``package.xml``:  

.. code-block:: xml

   <!-- ... -->
   <depend>rclpy</depend>  
   <!-- ... -->
   <buildtool_depend>ament_cmake_python</buildtool_depend>



   
