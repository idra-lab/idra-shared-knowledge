Tips and Tricks
===============

Automatic simulation start
--------------------------

One can automatically boot up the Coppeliasim simulator on a given scene calling

.. code-block:: bash

   $COPPELIASIM_ROOT_DIR/coppeliaSim.sh /path/to/scene.ttt

This operation can be performed also inside python, for instance when we want to start
the simulator a launch file.
We can check if the simulator is already running by checking the active processes on the
system using the ``psutil`` library (that can be installed with ``pip3 install psutil``):

.. code-block:: python

   import psutil

   is_running = "coppeliaSim" in (p.name() for p in psutil.process_iter())

Using the ``subprocess`` python package one can also execute the command that boots the
simulator with

.. code-block:: python

   import os
   import subprocess

   coppeliasim_dir = os.environ["COPPELIASIM_ROOT_DIR"]
   scene = "/path/to/scene.ttt"
   subprocess.Popen([f"{coppeliasim_dir}/coppeliaSim.sh", scene])

Combining the 2 scripts one could do

.. code-block:: python

   import os
   import psutil
   import subprocess

   if "coppeliaSim" not in (p.name() for p in psutil.process_iter()):
       coppeliasim_dir = os.environ["COPPELIASIM_ROOT_DIR"]
       scene = "/path/to/scene.ttt"
       subprocess.Popen([f"{coppeliasim_dir}/coppeliaSim.sh", scene],
                        stdout=subprocess.DEVNULL,
                        stderr=subprocess.DEVNULL)
