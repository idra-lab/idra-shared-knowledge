==========
ROS2 Notes
==========

These are personal notes for working with the second version of the `Robot Operating System <https://www.ros.org/>`_.
Notes reported here are mainly valid for the `humble` version of ROS that's compatible with `Ubuntu 22.04 LTS`.
For further information follow the `official documentation <https://docs.ros.org/en/humble/index.html>`_.

.. toctree::
   :maxdepth: 2

   01_CLI/00_index.rst
   02_Packages/00_index.rst


Installation
============

For more informations and instructions to install on different platforms,
refer to the `official installation documentation <https://docs.ros.org/en/humble/Installation.html>`_.

The following are shorthand instructions for installing ROS2 on Ubuntu 22.04 LTS based
on Debian packages.

.. note::

   First make sure that your locale supports ``UTF-8``. In generally this holds, but see
   `here <https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html#set-locale>`_
   for more information.

The following commands will enable the Ubuntu Universe repository, add teh ROS2 GPG kye
and add the ROS2 apt repository to your sources list.

.. code-block:: shell

   sudo apt install software-properties-common
   sudo add-apt-repository universe
   sudo apt update && sudo apt install curl -y
   sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

Before installing new packages it's suggested to update package list and upgrade already installed packages
(to ensure dependencies are met):

.. code-block:: shell

   sudo apt update && sudo apt upgrade -y

The following command will install all relevant packages for starting in ROS2:

.. code-block:: shell

   sudo apt install ros-humble-desktop -y
