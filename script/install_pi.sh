#!/bin/bash
sudo apt-get update
sudo apt-get install default-jre xvfb npm samba -y
sudo update-alternatives --config java
sudo smbpasswd -a pi
sudo chown -R pi:pi /data
sudo npm install n -g
sudo n latest
sudo npm install selenium-standalone@latest -g
sudo selenium-standalone install --config=/data/conf/selenium_standalone.js
cd data
#starting the selenium server
sudo xvfb-run --server-args="-screen 1, 1366x768x24" sudo selenium-standalone start --config=/data/conf/selenium_standalone.js
