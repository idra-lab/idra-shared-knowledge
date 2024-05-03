Docker Compose
==============

As the ``docker run`` comman starts having lots of different argument that must be provided to it, it becomes hard to remember the exact command to start a container.
To overcome this limitation there are different methods, namely:

- write the command into a shell ``.sh`` script, make it executable (``chmod +x``) and run it from the terminal;
- for containers that are often used by the user, create an alias in the shell configuration file (``.bashrc``, ``.zshrc``) to make it easier to run the command;
- or, the preferrable way, is to use **Docker Compose**.

Docker Compose is a tool that enables to configure and run multiple containers using a single ``.yaml`` configuration file.
Virtually, everything that can be done with the ``docker run`` command can be done with Docker Compose.

As an example, the file

.. code-block:: yaml

    # File: docker-compose.yml

    services:
      myubuntu:
        image: ubuntu:22.04
        environment:
          - DISPLAY=${DISPLAY}
          - PRINTNAME=${USER}
        volumes:
          - /tmp/.X11-unix:/tmp/.X11-unix
        command: bash -c "echo Hello, World!"

has the final result of the following command:

.. code-block:: bash

    docker run \
        --rm \
        -e DISPLAY=$DISPLAY \
        -e PRINTNAME=$USER \
        -v /tmp/.X11-unix:/tmp/.X11-unix \
        ubuntu:22.04 \
        bash -c "echo Hello, World!"

To properly run the container through the Docker Compose command, first go to the directory where the ``docker-compose.yaml`` file is located and run:

.. code-block:: bash

    docker-compose up


This would yield the following output:

.. code-block:: bash

    [+] Running 1/0
     ✔ Container test-myubuntu-1  Created                                                                                                                     0.0s
    Attaching to myubuntu-1
    myubuntu-1  | Hello, World!
    myubuntu-1 exited with code 0

In this case the ``docker-compose.yaml`` file was placed in a folder named ``test``, thus the docker compose runtime created a container named ``test-myubuntu-1``.
The output of the command ``echo Hello, World!`` was overlayed in the terminal and since all containers (1 in this case) finished, the docker compose command completed as well.

In general, to stop all containers created by the docker compose command, it is simply necessary to call ``docker-compose down``.

The complete list of available commands that can be used in Docker compose ``.yaml`` files can be found `here <https://github.com/compose-spec/compose-spec/blob/master/spec.md>`_.
