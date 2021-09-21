## Git Shit

#### Install git

- `sudo apt install git`

#### Git Configs

- `git config --global user.name "<Name Here>"`
- `git config --global user.email "<email@email.com>"`
- (optional) `git config --global init.defaultBranch main`
- `git config --list --show-origin` to list the configs

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
11. In the terminal: `ssh -T git@github.com` to check and see if it worked
    - should get "Hi `<Your Name>`! You've successfully authenticated, but GitHub does not provide shell access."

## VSCode

#### [Install VSCode](https://code.visualstudio.com/)

If you're using WSL, install VSCode on Windows instead of Ubuntu.

#### VSCode Settings & Extensions

- - (WSL) If VSCode didn't automatically prompt an installation, install **Remote Development** by Microsoft
- In VSCode > Manage > Settings > Search "wrap" > Editor: Word Wrap to "on"
- **Auto Close Tag** by Jun Han
- **Auto Rename Tag** by Jun Han
- **Better Comments** by Aaron Bond
- **Bracket Pair Colorizer 2** by CoenraadS
- **Live Server** by Ritwick Dey
- **Markdown Preview Github Styling** by Matt Bierner
- **Prettier** by Prettier
  - Manage > Settings > Search "Formatter" > Editor: Default Formatter to "esbenp.prettier-vscode"
  - Manage > Settings > Search "Format on Save" > Check the box
- **WASDMap** by Michael Romer

#### (Optional) VSCode Theme

1. Search for **Synthwave 84** by Robb Owen in Extensions
2. Enable the theme
3. Run VSCode as superuser
4. Ctrl + Shift + P > "Enable Neon Colors"
