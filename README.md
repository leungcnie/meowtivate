# Meowtivate

Stay meowtivated to finish your work with this whimsical to-do and habit tracker app, and collect herbaceous feline friends along the way!

* Unlock cats by completing all your tasks (to-do & daily tasks combined)
* Finish your daily tasks and maintain your streak to obtain big meowcoin rewards
* Shop for new pots to customize your plant
* **_Want a reminder?_** Set a timer to have your unfinished tasks sent to you through SMS 

Enjoy!

## Peekaboo

!["Welcome"](https://github.com/agxcd/meowtivate/blob/main/docs/Welcome.png?raw=true)
!["Dashboard"](https://github.com/agxcd/meowtivate/blob/main/docs/Dashboard.png?raw=true)
!["Lists"](https://github.com/agxcd/meowtivate/blob/main/docs/Lists.png?raw=true)
!["Collections"](https://github.com/agxcd/meowtivate/blob/main/docs/Collections.png?raw=true)
!["Shop"](https://github.com/agxcd/meowtivate/blob/main/docs/Shop.png?raw=true)
!["Inventory"](https://github.com/agxcd/meowtivate/blob/main/docs/Inventory.png?raw=true)

## Special Thank you!

All our plants and images displayed in the app are drawn by Monica and Connie.

Thanks to Kshun, Peepo and all the other cats for letting us use your portraits as reference!

## Instructions for installation

- You will need vagrant / psql in your machine for the back-end

- Go to back-end and front-end and follow the instructions below.

- For the weather api & twilio text message to work:
  after you create your version of .env referencing the .env.example
  in back-end folder, you will need to enter your own api keys
  (Sorry, it's not provided)

## Main folder

- If you want to concurrently start both of the front-end and back-end
  after you npm install front-end and back-end individually, come back to your main folder
  and do the following

1. `npm i`
2. `npm start`

front-end starts at
`http://localhost:3006/`

back-end starts at
`http://localhost:5001/`

## Back-end

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `vagrant up` -> `vagrant ssh`

4. `psql -U vagrant -d template1`

5. `CREATE DATABASE final OWNER labber;`

6. On host machine: cd into meowtivate/back-end

7. Run `npm run db:reset`

8. If entering `pg_config` in terminal doesn't yield a path, follow the instructions [here](https://www.npmjs.com/package/pg-native) to install.

9. `npm i`

9. In case you want to start back-end separately
   your command is : `npm run dev`

## Front-end

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `npm i`

4. In case you want to start front-end separately
   your command is : `npm start`

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
   

## Group Members

- Connie Leung

- Monica Li

- Angie Xu

