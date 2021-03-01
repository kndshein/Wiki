https://linuxize.com/post/how-to-install-php-8-on-ubuntu-20-04/

sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt install php8.0

cd ~
curl -sS https://getcomposer.org/installer -o composer-setup.php

```
HASH=`curl -sS https://composer.github.io/installer.sig`
```

echo $HASH
php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer

composer
sudo apt-get install php-mbstring
sudo apt install php-xml
