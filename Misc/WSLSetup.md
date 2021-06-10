## Setting Up the Windows Subsystem Linux in Windows 10

#### Prep Windows for Insertion

1. In the Windows search bar, search `Turn Windows features on or off`
   1. If that does work, `Control Panel` > `Programs` > `Programs and Features` > on the left panel `Turn Windows features on or off`
2. In `Windows Features`, look for `Windows Subsystem for Linux`
3. Check the box then press `OK`
4. Once the installation is done, `Restart Now`

#### Installing Ubuntu

1. Once the PC has been restarted, open `Microsoft Store`
2. In Microsoft Store, search for Ubuntu
3. Choose your desired Linux OS, for this tutorial, Ubuntu will be used
4. `Get` and `Install` Linux
5. Voila!

## Packages

#### nvm and npm

1. Open `cmd` on Windows
2. `bash`
3. `curl -o- https://raw.githubusercontent.com/creationix/nvm/<latest version here>/install.sh | bash` with the latest version in `<latest version here>` (i.e. `v0.33.11`)
4. Restart the terminal: `cmd` then `bash`
5. `nvm install node`
6. Restart the terminal: `cmd` then `bash`
7. Check if `nvm` is properly installed using `nvm -v`
8. Check if `npm` is properly installed using `npm -v`

#### yarn

1. Open `cmd` on Windows
2. `bash`
3. `curl -o- -L https://yarnpkg.com/install.sh | bash`
4. Restart the terminal: `cmd` then `bash`
5. Check if properly installed using `yarn --version`
