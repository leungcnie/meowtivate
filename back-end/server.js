// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 5001;
const ENV = process.env.ENV || "development";
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
// const pino = require("express-pino-logger")();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Store database connection + db helper functions as 'db'
const db = require("./database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  cookieSession({
    keys: ["meowtivate"],
  })
);
// app.use(pino);

// Separated Routes for each Resource
const collectionRoutes = require("./routes/catsCollection");
const todoRoutes = require("./routes/todoRoutes");
const habitRoutes = require("./routes/habitRoutes");
const actionRoutes = require("./routes/actionRoutes");
const accountRoutes = require("./routes/accountRoutes");
const shopRoutes = require("./routes/shopRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

// Mount all resource routes
const collectionRouter = express.Router();
app.use("/api/collections", collectionRoutes(collectionRouter, db));

const todoRouter = express.Router();
app.use("/api/todos", todoRoutes(todoRouter, db));

const habitRouter = express.Router();
app.use("/api/habits", habitRoutes(habitRouter, db));

const actionRouter = express.Router();
app.use("/api/actions", actionRoutes(actionRouter, db));

const accountRouter = express.Router();
app.use("/api/accounts", accountRoutes(accountRouter, db));

const shopRouter = express.Router();
app.use("/api/shop", shopRoutes(shopRouter, db));

const inventoryRouter = express.Router();
app.use("/api/inventory", inventoryRoutes(inventoryRouter, db));

// Twilio
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
