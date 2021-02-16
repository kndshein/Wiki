## Setting Up the Virtual Machine

#### [Download Xubuntu ISO](https://xubuntu.org/download/)

#### [Install Oracle VM VirtualBox Manager](https://www.virtualbox.org/)

#### Create Virtual Machine on VirtualBox
1. Type: Linux, Version: Ubuntu (64-bit)
2. Memory size: 12,288 MB
3. Create a virtual hard disk now
4. VDI (VirtualBox Disk Image)
5. Fixed Size
6. 256 GB
7. Select created virtual machine > Settings > Storage
8. Under Storage Devices > Controller:IDE > Optical Drive: "IDE Secondary Master" > Click on the CD Icon
9. Browse for the downloaded ISO > OK
10. Turn on Virtual Machine

#### [Install Xubuntu](http://www.fixedbyvonnie.com/2015/07/how-to-setup-virtualbox-in-windows/)
1. "Install Xubuntu"
2. "Download updates while installing Xubuntu", leave "Install third-party software for..." unchecked
3. "Erase disk and install Xubuntu"
4. Enter credentials
5. Prompt to restart the "computer"
6. Prompt to press enter after removing medium - just press enter

#### [Set Up Xubuntu](http://www.fixedbyvonnie.com/2015/07/how-to-setup-xubuntu-linux-in-virtualbox-step-by-step/)
1. Login
2. VirtualBox Menu > Devices > "Insert Guest Additions CD Image"
3. Open Terminal Emulator
4. `sudo apt-get install build-essential module-assistant`
5. `sudo m-a prepare`
6. `sudo /media/kndshein/VBox_GAs_6.1.16/VBoxLinuxAdditions.run` using appropriate username and file directory
7. Restart Xubuntu (Top left menu > Power button > Restart)
8. In VirtualBox Menu > File > Preferences > Display > Maximum Guest Screen Size "Hint" > Change width and height > OK
9. Toggle Right Ctrl + F to Fullscreen to readjust screen
10. In VirtualBox Menu > Devices > Shared Clipboard > Bidirectional
11. Shut down Xubuntu and adjust Processor and Video Memory in VirtualBox > Settings > System

## Git Shit

#### Install git
* `sudo apt install git`

#### Git Configs
* `git config --global user.name "<Name Here>"
* `git config --global user.email "<email@email.com>"
* (optional) `git config --global init.defaultBranch main`
* `git config --list --show-origin` to list the configs

#### [Git SSH Keys](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
1. Open Git Bash
2. `cd ~`
3. `ssh-keygen -t ed25519 -C "your_email@example.com"`
4. Enter to continue with the default directory
5. (Optional) Passphrase - press Enter for no passphrase
6. `cd .ssh` or wherever the SSH Key is stored
7. `ls` > `cat <ssh filename>.pub`
8. Copy the generated code in its entirety
9. Go to [Github](https://www.github.com) > Settings > SSH and GPG keys > New SSH Key
9. Paste the code > Add SSH Key

## Node.js and npm

1. `sudo apt update`
2. `sudo apt install nodejs`
3. `sudo apt install npm`
4. `nodejs -v` to check if node.js was installed and to see its version
5. `npm -v` to check if npm was installed and to see its version

## VSCode

#### [Install VSCode](https://code.visualstudio.com/)

#### VSCode Settings & Extensions

* In VSCode > Manage > Settings > Search "wrap" > Editor: Word Wrap to "on"
* Auto Close Tag
* Auto Rename Tag
* Bracket Pair Colorizer 2
* Live Server
* Markdown Preview Github Styling
* Prettier (Manage > Settings > Search "Formatter" > Editor: Default Formatter to "esbenp.prettier-vscode"

## (Optional) Theme for a Cyberpunk look

#### GNOME Themes
* ["Candy" Icon Pack](https://www.xfce-look.org/p/1305251/)
* ["Sweet" Folder Icon Pack](https://www.opendesktop.org/p/1284047/) (to be used in conjunction to "Candy" Icon Pack)
* ["Sweet" Theme](https://www.gnome-look.org/p/1253385/)

1. Extract the folders and put the icons and theme folders in `.icons` and `.themes` folders in ~ directory respectively
2. Xubuntu Menu > Settings > Appearance > Style > "Sweet-Dark"
3. Xubuntu Menu > Settings > Appearance > Icons > "Sweet-Rainbow"
4. Xubuntu Menu > Settings > Windows Manager > Style > "Sweet-Dark"

#### VSCode Theme
1. Search "Synthwave 84" in Extensions
2. Enable the theme
3. Run VSCode as superuser
4. Ctrl + Shift + P > "Enable Neon Colors"

#### Google Chrome Theme
1. Settings > More Tools > Extensions
2. Hamburger Menu > "Open Chrome Web Store"
3. Search for "Cyberpunk by Angus"