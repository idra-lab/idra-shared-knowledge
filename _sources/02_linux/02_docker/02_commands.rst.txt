Useful commands
---------------

To pull a image from the `DockerHub <https://hub.docker.com/>`_, call 

.. code-block:: shell

   docker pull <image_name>:<tag>

For instance to pull the `ROS2 humble image <https://hub.docker.com/r/osrf/ros>`_ call ``docker pull osrf/ros:humble-desktop-full`` 
(this image comes also with GUI applications, such RViz).

To see the already pulled images that are ready to run call

.. code-block:: shell

   docker image ls

To create a container, call

.. code-block:: shell

   # docker image run <image>
   # or, shorter,
   docker run <image>

In general, configuration arguments that must be passed to the image on boot up must be called *prior* to the image name, 
while arguments that *follows* are executed on the spinned contained:

.. code-block:: shell

   docker run <docker_arguments> <image> <commands>

A useful argument is ``-ti`` that boots the image and starts an ``i`` interactive ``t`` terminal.

To see currently runnint containers, call

.. code-block:: shell

   docker container ls
   # or,
   # docker ps

To see already spinned containers that have been terminated, append the ``-a`` flag to the command.
Containers can be deleted with ``docker container rm <container_name> -f``, with ``-f`` the *force* argument. 
Additionally, you can pass the ``--rm`` flag to the ``docker run`` call to automatically delete the container when it stops spinning.

You can also start an already start a closed container or close a running container with the following commands:

.. code-block:: shell

   docker start <container_name>
   docker stop <container_name>