ZeroMQ remote API
=================

As described `here <https://www.coppeliarobotics.com/helpFiles/en/zmqRemoteApiOverview.htm>`_
Coppelia provides a remote API based on ZeroMQ.
This can be used to control the flow of the simulation, and in particular it can call
all `regular API <https://www.coppeliarobotics.com/helpFiles/en/apiFunctions.htm>`_ functions
that are available within the Coppelia environment.

Installation
------------

Coppelia provides a python package for accessing the ZeroMQ remote API that can be installed
as follows:

.. code-block:: bash

   python3 -m pip install coppeliasim-zmqremoteapi-client


Usage
-----

The following is a simple python examples that ensures that a scene is loaded, it automatically
starts the simulation and it waits until the simulation time reaches 10 seconds before stopping
it.

.. code-block:: python

   from coppeliasim_zmqremoteapi_client import RemoteAPIClient
   client = RemoteAPIClient()
   sim = client.require("sim")

   sim.loadScene("/path/to/scene.ttt")
   sim.startSimulation()

   while sim.getSimulationTime() < 10:
       pass

   sim.stopSimulation()

