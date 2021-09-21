## Ruby on Rails Setup

#### rbenv

1. Check if rbenv is installed using `rbenv`. If installed upgrade using `git -C "$(rbenv root)"/plugins/ruby-build pull`
1. `sudo apt install rbenv`
1. `mkdir -p "$(rbenv root)"/plugins`
1. `git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build`
1. View possible ruby versions `rbenv install --list`

#### Ruby

1. Install ruby version with numerical beginning `rbenv install 3.0.0` (at the time of writing this, the latest version without dev is 3.0.0)
1. `rbenv versions` to check all installed versions. `*` is placed next to the currently used version
1. `rbenv global 3.0.0` to switch to the newly installed version
1. `rbenv versions` to confirm
1. `rbenv rehash` then restart the terminal

#### Install a gem to install Rails

1. List gems with `gem list`
1. Run `gem install pry` to install a gem called pry
   - Use `sudo gem install pry` if permission is denied
1. `rbenv rehash`
1. List gems with `gem list` look for `pry`
1. Run `pry` to start pry command
1. Type `2 + 2`
1. See if it works, then `quit`

#### Install Rails

1. `sudo gem install rails --pre`
   - if error, run `sudo apt update` and `sudo apt install ruby-full`
1. `rbenv rehash`
1. `rails -v` to check the version of rails and to confirm if it worked

#### Test Rails

1. `rails new blog`
1. `cd blog`
1. Run `rails s` to start the server
   - If `rails s` throws errors, you need to run `rails webpacker:install`, and then, run `rails s` again.
   - If `rails webpacker:install` throws errors, you may need to [download yarn](https://classic.yarnpkg.com/en/docs/install/#linux-stable) using `sudo npm install --global yarn`, and then, run `rails webpacker:install` again.
     - Check if yarn is correctly installed by running `yarn --version`
     - If yarn is not installed despite `sudo npm install --global yarn`, read the output on the terminal
     - In `~` directory, create a file called `.bash_profile` using `touch .bash_profile`
     - Open the new file and insert `export PATH="$PATH:/usr/local/lib/node_modules/yarn/bin"` by varying the directory path from the terminal output
     - Save the file and run `source ~/.bash_profile` in the terminal
     - Run `yarn`
     - Run `yarn --version` to check
     - Alternatively, try `sudo npm uninstall yarn` and reinstall it by running `sudo npm install --global yarn`
     - If there are still errors, [godspeed](https://stackoverflow.com/questions/40317578/yarn-global-command-not-working)

## Postgres Setup

#### [Install Postgres](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)

1. `sudo apt update`
1. `sudo apt install postgresql postgresql-contrib`

#### [Configure Postgres](https://tuts.alexmercedcoder.com/2021/2/linuxpostgres/)

1. (WSL) `sudo service postgresql start`
1. `sudo su postgres`
1. `psql`
1. `CREATE USER <YourLinuxUsername> WITH SUPERUSER PASSWORD '<YourPassword>';` (!important: make sure it's single quotes, and end the command with `;`)
1. `CREATE DATABASE <YourLinuxUsername>;` (!important: again, make sure the command line ends with `;`)
1. `\q`
1. `exit`
1. `psql` to check if you can access with your username
1. `\conninfo` to validate if installation worked

## Misc. Troubleshooting Commands

If `bundle install` throws an error for `pg` package, run `sudo apt-get install libpq-dev`

If the version of running Ruby is from the system (check using `which ruby`), run `echo 'eval "$(rbenv init -)"' >> ~/.bashrc` to reroute Ruby. Run `rbenv rehash`, and restart terminal.
