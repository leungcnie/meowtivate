# Meowtivate

Stay meowtivated to finish your work with this whimsical to-do and habit tracker app, and collect herbaceous feline friends along the way!

* Unlock cats by completing all your tasks (to-do & daily tasks combined)
* Finish your daily tasks and maintain your streak to obtain big meowcoin rewards (100 coins per 100% completion awarded daily)
* Shop for new pots to customize your plant
* **_Want a reminder?_** Set a timer to have your unfinished tasks sent to you through SMS 

Enjoy!

## Final Product

!["Welcome"](https://github.com/agxcd/meowtivate/blob/main/docs/Welcome.png?raw=true)
!["Dashboard"](https://github.com/agxcd/meowtivate/blob/main/docs/Dashboard.png?raw=true)
!["Lists"](https://github.com/leungcnie/meowtivate/blob/main/docs/Lists-140.gif?raw=true)
!["Collections"](https://github.com/agxcd/meowtivate/blob/main/docs/Collections.png?raw=true)
!["Shop"](https://github.com/agxcd/meowtivate/blob/main/docs/Shop.png?raw=true)
!["Inventory"](https://github.com/agxcd/meowtivate/blob/main/docs/Inventory.png?raw=true)

## Instructions for installation

- You will need `psql` installed on your machine (or on a vagrant guest machine) for the back-end

- `cd` into `meowtivate/back-end` and `meovtivate/front-end` and follow the instructions below before running `cd ..` -> `npm i` in the `meowtivate` folder.

## Back-end Folder

1. Create the .env by using .env.example as a reference: `cp .env.example .env`

2. Create a psql database called *final* owner by a user *labber* with password *labber*. Follow steps **3-5** for vagrant, or **6-8** for host machine.

#### ON VAGRANT

3. `vagrant up` -> `vagrant ssh`

4. `psql -U vagrant -d template1`

5. `CREATE DATABASE final OWNER labber;`


#### ON HOST MACHINE

6. `psql` -> `CREATE USER labber WITH PASSWORD 'labber';`

7. `CREATE DATABASE labber OWNER labber;`

8. `ALTER USER labber WITH Superuser createrole createdb replication;`

9. `npm i`

10. If entering `pg_config` in terminal doesn't yield a path, follow the instructions [here](https://www.npmjs.com/package/pg-native) to install.

11. Run `npm run db:reset` to run db schema and seeds

In case you want to start back-end separately
   your command is : `npm run dev`

## Front-end Folder

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information. You will need API keys from [OpenWeather](https://openweathermap.org/appid) and [Twilio](https://www.twilio.com/)


3. `npm i`

In case you want to start front-end separately
   your command is : `npm start`

## Meowtivate Root Folder

- If you want to concurrently start both of the front-end and back-end
  after you npm install front-end and back-end individually, come back to your main folder
  and do the following

1. `npm i`
2. `npm start`

Front-end starts at
`http://localhost:3006/`

Back-end starts at
`http://localhost:5001/`

## Dependencies

    "@fontsource/itim": "^4.1.0",
    "@material-ui/core": "^4.11.2",
    "@material-ui/icons": "^4.11.2",
    "axios": "^0.21.1",
    "concurrently": "^5.3.0",
    "fontsource-itim": "^4.0.0",
    "nodemon": "^2.0.7"
    "twilio": "^3.55.0"
    "body-parser": "^1.19.0",
    "cookie-session": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-pino-logger": "^5.0.0",
    "node-schedule": "^1.3.2",
    "nodemon": "^2.0.7",
    "pg": "^8.5.1",
    "pg-native": "^3.0.0",
    "web-push": "^3.4.4"
   

## Group Members & Responsibilities

- **Connie Leung:** App functionality with React, back-end routing, cat/pot assets

- **Monica Li:** UI design and implementation, animations, all assets

- **Angie Xu:** External API, back-end routing

