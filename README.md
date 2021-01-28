# Meowtivate

Stay meowtivated to finish your work with this whimsical to-do and habit tracker app, and collect herbaceous feline friends along the way

How to get cats?

By completing all your tasks (todo & daily tasks together), you will unlock a special Meow.

We also provide a shop, where you spend your Meow coins, purchase customize pots.

By finishing your daily tasks in a streak, big rewards of coins are waiting for you.

Want to have a reminder of your tasks, you can set a timer,  Meowtivate will send you a SMS twith a lits of things await for your completion.


Enjoy!!!

## Peekaboo

!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/Welcome.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/dashboard.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/Lists.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/collection.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/shop.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/textmsg.png)

## Special Thank you!

All our plants and images display in the app are drawing by Monica and Connie.

Thanks to Kshun, Peepo and all the other cats for letting us using your portraits as reference!!!

## Instruction of installation

- You will need vagrant / psql in your machine for the back-end

- go to back-end and front-end and follow the instruction below.

- for the weather api & twilio text message to work:
  after you create your version of .env referencing the .env.example
  in back-end folder, you need to enter your own api keys
  (Sorry, it's not provided)

## Main folder

- if you want to concurrently start both of the front-end and back-end
  after you npm install front-end and back-end individually, come back to your main folder
  and do the following

1. `npm i`
2. `npm start`

front-end start at
`http://localhost:3006/`

back-end start at
`http://localhost:5001/`

## Back-end

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `vagrant up` -> `vagrant ssh`

4. `psql -U vagrant -d template1`

5. `CREATE DATABASE final OWNER labber;`

6. On host machine: cd into meowtivate/back-end

7. run `npm run db:reset`

8. in case you want to start back-end separately
   your command is : `npm run dev`

## Front-end

1. Create the .env by using .env.example as a reference: cp .env.example .env

2. Update the .env file with your correct local information

3. `npm i`

4. in case you want to start front-end separately
   your command is : `npm start`


## dependencies

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
   

## Group Member

- Connie Leung

- Monica Li

- Angie Xu
