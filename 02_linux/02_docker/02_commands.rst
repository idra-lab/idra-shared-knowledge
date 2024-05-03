Useful commands
===============

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


Run arguments
^^^^^^^^^^^^^

The following is a list of useful launch arguments that can be paired with the ``run`` command to extend docker capabilities.

- ``-it``: as already mentioned, starts the docker container and enters in the interactive terminal;
- ``--rm``: removes the container instance after the container stops spinning;
- ``--env <VAR>:<VAL>`` or ``-e <VAR>:<VAL>``: sets an environment variable ``VAR`` with ``VALUE`` on the container;
- ``--net=<CONFIG>``: sets the networking configuration. Details can be found `here <https://docs.docker.com/network/>`_,
  but available configurations are ``bridge`` (default), ``host`` (recommended), ``none``, ``overlay``, ``ipvlan``, ``macvlan``.
..  Choosing ``--net=host`` simplifies, for instance, the X11 forwariding to show graphical elements.


X11 windows forwarding
^^^^^^^^^^^^^^^^^^^^^^

To enable X11 windows forwarding, you should provide the ``run`` command the following arguments:

.. code-block:: shell

   -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix:rw

This command forwards the ``DISPLAY`` argument to the container and binds the X11 socket of the host machine to the container one
(see `here <https://stackoverflow.com/questions/28392949/running-chromium-inside-docker-gtk-cannot-open-display-0>`_ for further referencing).

If still you are unable to see the display and the terminal reports an error of the type `cannot open display`,
call the following command to enable docker to control the local X11 server:

.. code-block:: shell

   xhost +local:docker
