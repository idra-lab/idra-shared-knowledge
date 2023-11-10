Workflow triggers
=================

A GitHub action workflow might be triggered by different conditions, for instance the
push on a specific branch, the creation of a pull request or a tag, a scheduled event and
even manual triggers.

For instance the following allows to trigger the workflow when commits are pushed either
on the `main` or `develop` branches:

.. code-block:: yaml

   on:
     push:
       branches:
         - main
         - develop

Conditions can be combined together; in the following example the workflow can be
triggered manually or by a scheduled event:

.. code-block:: yaml

   on:
     workflow_dispatch:         # manual trigger
     schedule:                  # scheduled event
       - cron: '0 0 * * *'      # scheduling details

.. note::

   Based on the `cron documentation <https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules?hl=it>`_,
   this task is executed each day ad midnight. Check the link for more details.
