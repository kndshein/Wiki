## Misc. Commands

* Open VSCode as superuser
```
sudo code --user-data-dir=~/root
```
* To Kill a Mocking Port
```
sudo kill -9 $(sudo lsof -t -i:<PORTNUMBER>)
```
* Set mongodb path
```
mongod --dbpath ~/mongodata
```