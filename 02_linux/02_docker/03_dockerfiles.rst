Dockerfiles
===========

To create a custom Docker image, it is simply necessary to write a ``Dockerfile``. 
Once the file is written, the image can be build with the command

.. code-block:: bash

    docker build -t <image_name> <path_to_Dockerfile><:tag (optional)>

So let us now see how to write a ``Dockerfile``. 
In general the first line of a ``Dockerfile`` is the ``FROM`` command, which specifies the base image. 
The base image can be either already built in the system or can be pulled from the Docker Hub registry.
For instance, the following is the statement to pull the Ubuntu 22.04 image from the Docker Hub registry:

.. code-block:: Docker

    FROM ubuntu:22.04

After the ``FROM`` command are placed all other instructions. 
Keep in mind that since image building is a layer-based process, the order of the instructions is important to correctly use caching.

For instance, ``RUN <cmd>`` runs a given command in the shell and than layers the changes on the image. 

To copy some files from the host machine to the image, the ``COPY <host_dir> <img_dir>`` command is used.

To set the working directory of the image, the ``WORKDIR <dir>`` command is used.

To set the user of the image, the ``USER <user>`` command is used; 
by default, ``root`` is selected, thus commands can be installed withouth the ``sudo`` keyword.

The last command of the ``Dockerfile`` is usually either ``CMD`` or ``ENTRYPOINT``. 
The main is that ``CMD`` is used to specify the default command to run when the container is started (if it was not specified through CLI),
while ``ENTRYPOINT`` is always executed and optional arguments are appended to it. 
For further details, `this <https://phoenixnap.com/kb/docker-cmd-vs-entrypoint>`_ is a good article.

.. code-block:: Docker

    FROM ubuntu:22.04

    # This is a good practice to install packages:
    #  1. to help caching, collect all the installation procedure in a single RUN command 
    #  2. to avoid caching issues and save image space, base images come with available  
    #     package lists that are empty.t So always first update the package list, then 
    #     install the packages.
    #  3. to avoid caching issues, remove the package list after installation
    RUN apt-get update \ 
        && apt-get install -y <packages> \
        && rm -rf /var/lib/apt/lists/*

    # This command copies the content of the current directory to the /application directory of the image
    COPY . /application

    WORKDIR /application
    RUN touch test.txt

    ENTRYPOINT ["echo", "Hello World!"]