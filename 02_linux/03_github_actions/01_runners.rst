Action runners
==============

*Runners* are the entities on top of which github actions are executed; in practice,
they are docker images that run on remote github servers.


Self-hosted runners
-------------------

To avoid computation limitation of github servers, one could use self-hosted runners,
i.e. using the proper hardware to run github actions.

Installation of self-hosted runners is described `here <https://docs.github.com/en/actions/hosting-your-own-runners/adding-self-hosted-runners>`_,
but generally go to the repository settings, then to the *Actions* tab, and click on *Add runner*
and follow the instructions there reported.

In this context it is also recommended to :ref:`install docker <docker-installation>`.
