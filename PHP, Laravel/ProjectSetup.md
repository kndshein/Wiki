## [Creating a Laravel Backend with PostgreSQL](https://dev.to/alexmercedcoder/hello-world-laravel-101-hdd)

1. `composer create-project laravel/laravel <app-name-here>`
1. `php artisan serve` and check `localhost:8000` on a browser to see if the host is working
1. In `.env` file, edit file to:

   ```
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=<database_name>
   DB_USERNAME=<psql-username>
   DB_PASSWORD=<psql-password>
   ```

1. Create a database through psql

   1. `psql`
   2. `CREATE DATABASE <database_name>;`
   3. `quit`

1. `php artisan make:model <tableName> -m`

1. Edit migration file in database > migrations

1. `php artisan migrate`

#### Seeding the Database

1. `php artisan make:seeder <NameForSeeder>`

#### Deploying on Heroku

1. Create a file named `Procfile` (with no file extention) in the parent Laravel foldier.
1. Type `web: vendor/bin/heroku-php-apache2 public/` into the `Procfile`
1. Commit and push the repo.
1. Connect the GitHub Repo to Heroku
1. Turn on Automatic Deploy and trigger a manual deploy
1. At this point, the Heroku app link should present a `500 Server Error`
1. In Heroku App > Settings > Reveal Config Vars, copy the information below from `.env` file of the local Laravel repo

   ```
   APP_NAME: <AppName> //Laravel
   APP_ENV: production
   APP_KEY: <app-key-string> //base64:50oNlu/2JbusnMtFCXEufQzxGhzHUcKZsUe4vbylmpo=
   APP_DEBUG: true
   APP_URL: <heroku-app-deployed-link> //https://some-app.herokuapp.com
   ```

1. In HerokuApp > Resources, Add `Heroku Postgres` Addon
1. Open `Heroku Postgres` > Settings > Database Credentials > View Credentials...
1. While the credentials are open, go back to HerokuApp > Settings > Reveal Config Vars, add the remaining information

   ```
   DB_CONNECTION: pgsql
   DB_HOST: <host-string> //ec2-54-146-73-98.compute-1.amazonaws.com
   DB_USERNAME: <username>
   DB_PASSWORD: <password> //761fdb25873349e986ca1f84ff9be810162a3a89069b8284018d89ca11a598c8
   DB_PORT: 5432
   ```

1. Heroku App > More > Run Console
   1. Run `php artisan migrate`
   1. Run `php artisan db:seed`
