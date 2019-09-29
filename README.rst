=================
nodejs-helloworld
=================

A Node.js '`Hello World <https://en.wikipedia.org/wiki/%22Hello,_World!%22_program>`_' program example.


Installation
============

You need install the pre-requirements for run this Hello World example.

Update repositories of available packages to install, with
the following command:

::

  $ sudo apt update

Install necessary minimum dependencies, with the following command:

::

  $ sudo apt install curl software-properties-common gcc g++ make
  $ curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -
  $ sudo apt install -y nodejs


Run application
===============

Create env variables
::
    echo "HELLO_WORLD=First-hello-world" > .env && echo "SECOND_HELLO_WORLD=Second-hello-world" >> .env
    
You can run Hello World Demo, with the following command:

::
    $ nodejs ./http_server.js

Then, you can open the URL http://127.0.0.1:3000/ in your web browser and you can 
see the hello world example like this:

.. figure:: https://github.com/macagua/nodejs-helloworld/raw/master/docs/nodejs_helloword.png
   :width: 447px
   :align: center
   :alt: A Node.js 'Hello World' program example

   A Node.js 'Hello World' program example


Reference
=========

- `Step 4. Create Demo Web Server (Optional) - How to Install Latest Nodejs & NPM on Debian 9/8/7 <https://tecadmin.net/install-latest-nodejs-npm-on-debian/>`_.

