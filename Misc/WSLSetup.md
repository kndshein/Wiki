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

## Git Shit

#### Git Configs

- `git config --global user.name "<Name Here>"`
- `git config --global user.email "<email@email.com>"`
- (optional) `git config --global init.defaultBranch main`
- `git config --list --show-origin` to list the configs
  - `git config --global --unset <user.name, user.email>` to remove git config

#### [Git SSH Keys](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

1. Open Terminal
2. `cd ~`
3. Type in Terminal: `ssh-keygen -t ed25519 -C "<your_email@example.com>"` with your email.
4. Enter to continue with the default directory
5. (Optional) Passphrase - press Enter for no passphrase
6. `cd .ssh` or wherever the SSH Key is stored
7. `ls` > `cat <ssh filename>.pub`
8. Copy the generated code in its entirety
9. Go to [Github](https://www.github.com) > Settings > SSH and GPG keys > New SSH Key
10. Paste the code > Add SSH Key
