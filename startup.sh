#!/bin/bash
npm install
var=$(pm2 list | grep http_server)
if [ -z "$var" ]
then
      pm2 start http_server.js
else
      pm2 delete http_server
      pm2 start http_server.js
fi