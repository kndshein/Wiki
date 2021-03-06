## Creating a Ruby on Rails Backend with PostgreSQL

#### Initial Setup

1. `rails new <app-name-here> --api -d postgresql --skip-git`
1. In /config/database.yml

   ```
   default: &default
   # add the following in addition to what's present
      host: localhost
      port: 5432
      username: <username>
      password: <password>

   production:
      <<: *default
      # replace all code with following line
      url: <%= ENV['MY_APP_DATABASE_URL'] %>
   ```

1. (Optional) Add `gem 'hirb'` in `Gemfile` and run `bundle install` in terminal to enable Hirb
1. `rails db:create`
1. `rails dbconsole` to check
1. `rails g migration Create<TableNameHere>`
1. Configure desired table data
1. `rails db:migrate`

#### Model and Seeding

1. Set up model in `app/models` by creating a file with the singular name of the database

   ```
   class <Modelnamehere> < ApplicationRecord
   end
   ```

1. Set up seed file in `db/seeds.rb`
1. Run `rails db:seed`

#### Routes and Controller

1. Set up routes file in `config/routes.rb`

   ```
   Rails.application.routes.draw do
      resources :<nameofitemsintableinplural>
   end
   ```

1. Create a file in `app/controller`. The file name should be in lowercase and plural: `<tablename>_controller.rb`

   ```
   class <Tablenameinplural>Controller < ApplicationController
   end
   ```

#### Misc Commands

`rails g scaffold <tablename> <columnname>:<typeofdata>` e.g. `rails g scaffold album name:string`

#### Deploying to Heroku

1. In database.yml, change `MY_APP_DATABASE_URL` to `DATABASE_URL`
2. Push to GitHub
3. Connect Heroku to GitHub
4. In Heroku > More > Run Console > `rails db:migrate` then `rails db:seed`
