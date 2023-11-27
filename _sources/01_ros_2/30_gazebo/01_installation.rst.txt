Installation
============

For more details on the installation procedure, please refer to the `official documentation
<https://gazebosim.org/docs/harmonic/getstarted#getting-started-with-gazebo->`_.
As suggested, for Ubuntu 22.04, the preferred version of Gazebo is *Fortress*; this can
be achieved with:

.. code-block:: bash

   sudo apt-get update
   sudo apt-get install -y lsb-release wget gnupg
   sudo wget https://packages.osrfoundation.org/gazebo.gpg -O /usr/share/keyrings/pkgs-osrf-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/pkgs-osrf-archive-keyring.gpg] http://packages.osrfoundation.org/gazebo/ubuntu-stable $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/gazebo-stable.list > /dev/null
   sudo apt-get update
   sudo apt-get install -y ignition-fortress

To test the installation:

.. code-block:: bash

   gz sim shapes.sdf


