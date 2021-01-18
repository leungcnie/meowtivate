## Setting up db:

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `vagrant up` -> `vagrant ssh`
4. `psql -U vagrant -d template1`
5. `CREATE DATABASE final OWNER labber;`

6. On host machine: cd into meowtivate/back-end
7. run `npm run db:reset`

   you only have to do this once! going forward just remember to vagrant up to connect to database and you can run npm run db:reset any time you need to reset db
