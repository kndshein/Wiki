## Setting Up the WSL 2 (Windows Subsystem Linux) on Windows 10

#### [Prep Windows for Insertion](https://docs.microsoft.com/en-us/windows/wsl/install-win10)

1. Run `PowerShell` as administrator
   - In Windows search bar, type in `PowerShell`
   - Right click on `Windows PowerShell` and `Run as administrator`
2. Type in `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
3. Type in `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
4. Restart the PC
5. Download and install [Linux Kernel Package](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)
6. Run `PowerShell` as administrator once again
7. Type in `wsl --set-default-version 2`

#### Installing Ubuntu

1. Open `Microsoft Store`
2. In Microsoft Store, search for Ubuntu
3. Choose your desired Linux OS, for this tutorial, Ubuntu will be used
4. `Get` and `Install`
5. Run `PowerShell` once again, and type in `wsl --list --verbose` to check if Ubuntu has been properly installed along with its WSL version number
6. Voila!

## Packages

#### nvm and npm

1. Open `cmd` on Windows
2. `bash`
3. `curl -o- https://raw.githubusercontent.com/creationix/nvm/<latest version here>/install.sh | bash` with the [latest version](https://github.com/nvm-sh/nvm/releases) in `<latest version here>` (i.e. `v0.33.11`)
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

## [Git](https://github.com/kndshein/Wiki/blob/main/Misc/PostSetup.md#git-shit)

## [VSCode](https://github.com/kndshein/Wiki/blob/main/Misc/PostSetup.md#vscode)

## [Ruby on Rails](https://gorails.com/setup/windows/10)

1.
