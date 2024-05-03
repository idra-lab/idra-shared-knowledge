.. _docker-installation:

Installation
============

For more details follow the `official installation guide <https://docs.docker.com/engine/install/ubuntu/>`_
to install in Ubuntu. In essence

.. code-block::

   # Add Docker's official GPG key:
   sudo apt-get update
   sudo apt-get install ca-certificates curl gnupg
   sudo install -m 0755 -d /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg

   # Add the repository to Apt sources:
   echo \
     "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
     "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
     sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   sudo apt-get update

   # Install docker packages:
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

.. note::

   If you plan to use docker as github runner for CI/CD, provide privileges to the
   *docker.sock* files:

   .. code-block::

      sudo chmod 666 /var/run/docker.sock

   More details `here <https://stacktuts.com/got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-unix-var-run-docker-sock-get-http-2fvar-2frun-2fdocker-sock-v1-24-version-dial-unix-var-run-docker-sock-connect-permission-denied>`_.

Arch install
^^^^^^^^^^^^

Link to the `Arch Wiki <https://wiki.archlinux.org/title/Docker>`_.
To install the docker engine:

.. code:: shell

   sudo pacman -Sy docker

Then either the ``docker.service`` or the ``docker.socket`` system service must be enabled.
The former loads docker at boot up (thus more load time could be required), while the latter loads on first usage:

.. code:: shell

   sudo systemctl enable docker.socket
   # Or alternatively
   # sudo systemctl enable docker.socket

As discussed in the Arch wiki page and `here <https://www.configserverfirewall.com/ubuntu-linux/add-user-to-docker-group-ubuntu/>`_, to run docker with sudo privileges it is recommended to add the own `user` to the ``docker`` group.
You can check the existance of the group by calling

.. code:: shell

   grep docker /etc/group

If the group exists, then add the user simply with the command

.. code:: shell

   sudo usermod -aG docker $USER  # or set the <user_name>

or alternatively create the group:

.. code:: shell

   sudo groupadd docker

After this operation, remember to restart the docker service:

.. code:: shell

   sudo systemctl restart docker
