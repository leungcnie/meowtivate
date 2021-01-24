// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 5001;
const ENV = process.env.ENV || "development";
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const morgan     = require('morgan');
const cookieSession = require("cookie-session");
const pino = require("express-pino-logger")();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Store database connection + db helper functions as 'db'
const db = require("./database");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(morgan('dev'));

// app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/styles", sass({
//   src: __dirname + "/styles",
//   dest: __dirname + "/public/styles",
//   debug: true,
//   outputStyle: 'expanded'
// }));
// app.use(express.static("public"));
app.use(cors());
app.use(
  cookieSession({
    keys: ["meowtivate"],
  })
);

app.use(pino);

// Separated Routes for each Resource
const indexRoutes = require("./routes/indexRoutes");
const exampleRoutes = require("./routes/exampleRoutes");
const collectionRoutes = require("./routes/catsCollection");
const todoRoutes = require("./routes/todoRoutes");
const habitRoutes = require("./routes/habitRoutes");
const actionRoutes = require("./routes/actionRoutes");
const accountRoutes = require("./routes/accountRoutes");
const shopRoutes = require("./routes/shopRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

// Mount all resource routes
const indexRouter = express.Router();
app.use("/api/", indexRoutes(indexRouter, db)); // login + logout routes included

const exampleRouter = express.Router();
app.use("/api/examples", exampleRoutes(exampleRouter, db));

const collectionRouter = express.Router();
app.use("/api/collections", collectionRoutes(collectionRouter, db));

//todo
const todoRouter = express.Router();
app.use("/api/todos", todoRoutes(todoRouter, db));

//habit
const habitRouter = express.Router();
app.use("/api/habits", habitRoutes(habitRouter, db));

//action
const actionRouter = express.Router();
app.use("/api/actions", actionRoutes(actionRouter, db));

//user Account
const accountRouter = express.Router();
app.use("/api/accounts", accountRoutes(accountRouter, db));

//Streak and data log
// const streakRouter = express.Router();
// app.use("/api/streaks", streakRoutes(streakRouter, db));
// shop inventory
const shopRouter = express.Router();
app.use("/api/shop", shopRoutes(shopRouter, db));

// user inventory
const inventoryRouter = express.Router();
app.use("/api/inventory", inventoryRoutes(inventoryRouter, db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// app.get("/", (req, res) => {
//   res.render("index");
// });

// Trilio
app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.TWILIO_MY_PHONE_NUMBER,
      body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(PORT, () => {
  console.log(
    `Example app listening on port ${PORT}! http://localhost:${PORT}`
  );
});
