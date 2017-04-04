# Raspberry Pi Selenium

## Installation Raspberry pi

```bash
    
    cd /
    sudo git clone https://github.com/seekwhencer/pilenium.git data
    sudo sh /data/script/install_pi.sh
    
```

The Selenium Server runs on Port `4444`.
To start Selenium later:

```bash

    sudo xvfb-run --server-args="-screen 1, 1366x768x24" sudo selenium-standalone start --config=/data/conf/selenium_standalone.js

```

## Installation Dev

Same as Pi but

```bash

    cd /some/where/on/my/disk/
    sudo git clone https://github.com/seekwhencer/pilenium.git pilenium
    cd pilenium
    sudo sh script/install_dev.sh

```