#!/bin/bash
npm install
var=$(pm2 list | grep http_server)
if [ -z "$var" ]
then
      pm2 start npm -- start
else
      pm2 delete http_server
      pm2 start npm -- start
fi