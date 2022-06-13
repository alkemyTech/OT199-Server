# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

## Users for test
There are 10 admin and 10 no admin users to test. Their emails and password are: 
  - Admin: 
    * email: adminX@test.com 
    * password: adminXpass
  - No Admin: 
    * email: no-adminX@test.com 
    * password: noadminXpass
(Replace the 'X' with a number between 1 and 10)