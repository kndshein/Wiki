## Creating a Ruby on Rails Project with PostgreSQL

1. `rails new <app-name-here> --api -d postgresql --skip-git`
1. in database.yml

   ```
   default: &default
   # add the following in addition to what's present
      host: localhost
      port: 5432
      username: <username>
      password: <password>

   production:
   # replace all code with following line
      url: <%= ENV['MY_APP_DATABASE_URL'] %>
   ```

1. `rails db:create`
1. `rails dbconsole` to check
1. `rails g migration Create<TableNameHere>`
1. `rails db:migrate`
1. Set up model in app/models by creating a file with the singular name of the database
   ```
   class <Modelnamehere> < ApplicationRecord
   end
   ```
