Actions setup
=============

GitHub actions are defined in *yaml* files in the ``.github/workflows`` directory of the
repository.
Files can have arbitrary names.

In general a github action workflow is defined as follows:

.. code-block:: yaml

   name: <name of the workflow>

   on: <event that triggers the workflow>

   jobs:
     <job name>:
       runs-on: <runner>
       steps:
         <steps to execute>

The name of the workflow is the one that will be displayed in the GitHub website in
the *Actions* tab. A workflow can be triggered in different ways, and after that it
will execute a series of jobs, each one might consist of several steps.
