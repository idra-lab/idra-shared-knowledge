Installation
============

Go to the `download <https://www.coppeliarobotics.com/downloads>`_ page of the Coppelia
website and download the *CoppeliaSim Edu* version for Ubuntu 22.04.

The software is provided as a tarball; in the following example, the software is installed
in the ``~/CoppeliaSim`` directory:

.. code-block:: bash

   tar -xf ~/Downloads/CoppeliaSim_Edu*
   mv CoppeliaSim_Edu* ~/CoppeliaSim
   # Optionally delete the tarball
   rm ~/Downloads/CoppeliaSim_Edu*.tar.xz

It is recommended to store the root directory of the CoppeliaSim installation as a
environment variable, so that it can be easily accessed from the terminal and the rest
of the presented code snippet can work with no problem. To do so add in the ``~/.bashrc``
file the line

.. code-block:: bash

   export COPPELIASIM_ROOT_DIR=$HOME/CoppeliaSim

or, more simply, call the command

.. code-block:: bash

   echo "export COPPELIASIM_ROOT_DIR=$HOME/CoppeliaSim" >> ~/.bashrc
