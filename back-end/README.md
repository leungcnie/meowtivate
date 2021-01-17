## Setting up db:

1. `vagrant up` -> `vagrant ssh`
2. `psql -U vagrant -d template1`
3. `CREATE DATABASE final OWNER labber;`
4. On host machine: cd into meowtivate/back-end
5. run `npm run db:reset`

   you only have to do this once! going forward just remember to vagrant up to connect to database and you can run npm run db:reset any time you need to reset db
