Jobs
====

Jobs are a list of operations that must be executed within the workflow call; error in
the execution of one or more jobs will mark the action run as failed.

One can think of workflows as a set of jobs that might (or not) have dependencies from
one of another.

.. code-block:: yaml

   jobs:
     <job name>:
       runs-on: <runner>
       steps:
         <steps to execute>

As mentioned, runners are actually docker images, so one can choose from the
`Docker Hub images library <https://hub.docker.com/>`_ of create a custom ``Dockerfile``.
As example are available ``ubuntu-latest`` to run the code on the latest released Ubuntu
OS, but specific version also could be called (``ubuntu-22.04``).
Usually images for specific environment are already configured (e.g. to work in node, python...).

After the *steps* directive the sequence of commands that needs to be executed are reported,
as example

.. code-block:: yaml

   steps:
     - name: Checkout the repository
       uses: actions/checkout@v4

     - name: Source the ros environment
       run: |
         source /opt/ros/humble/setup.sh
         source ~/ros_ws/install/setup,sh

Each dash ``-`` is a new command; the *name* directive, even if its not mandatory,
is useful to understand at which point of the workflow the execution is in a more intuitive
way.

The *uses* directive is used to call an action that is already available in the GitHub
Actions library; source code and documentation for each action can be found directly in
GitHub looking at ``<username>/<repository>``.
In this case the ``checkout`` action is used to clone the repository in the runner's
workspace (the ``v4`` tag is used to specify the version of the action to use).

The *run* directive is used instead to execute shell commands directly in the runner's
workspace.
