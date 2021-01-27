# Meowtivate

A lovely habits & tasks tracking app. By completing all your lists daily, you will unlock a special Meow Plant. We provide a trading shop, where you can purchase and customize your catPlant.

By finishing your daily tasks in a streak, big rewards of coins are waiting for you.

If you like to have reminder of your tasks, you can set a timer. Meowtivate will send you a text message to your phone with a lits of things await for your completion.
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/textmsg.png)

Enjoy!!!

## Peekaboo

!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/Welcome.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/dashboard.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/Lists.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/collections.png)
!["ScreenShot"](https://github.com/agxcd/meowtivate/blob/main/doc/shop.png)

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

## Group Member

- Connie Leung

- Monica Li

- Angie Xu
