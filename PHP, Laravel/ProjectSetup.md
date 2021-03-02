## Creating a Laravel Backend with PostgreSQL

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
