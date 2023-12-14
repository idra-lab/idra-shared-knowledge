==========================================
Fast ssh configuration for GitHub in Linux
==========================================
First of all you have to generate the public key using ssh-keygen

.. code-block:: bash

   # generate ssh key (press enter for every prompt) 
   ssh-keygen -o -t rsa -C "random_string_youwant" 
   # show public key 
   cat ~/.ssh/id_rsa.pub 
   # copy the public key (shiftt+ctrl+c)
   
Then you have to add the public key to your GitHub account.  
Login into Github and go in *<YourProfileImg> -> Settings -> SSH and GPG keys -> New SSH key* 
and paste the public key you have just copied.
