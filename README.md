# meowtivate

## Main folder

1. `npm i`
2. `npm start`

front-end start at
`http://localhost:3000/`

back-end start at
`http://localhost:5000/`

## Back-end

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `vagrant up` -> `vagrant ssh`
4. `psql -U vagrant -d template1`
5. `CREATE DATABASE final OWNER labber;`

6. On host machine: cd into meowtivate/back-end
7. run `npm run db:reset`

## Front-end

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `npm i`

4. storybook: `npm run storybook`
   storybook start at
   `http://localhost:6006/`

##
