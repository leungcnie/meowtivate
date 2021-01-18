/* 
This file contains the db connection and db helper functions.
All SQL queries should go in here.
*/

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// EXAMPLES QUERIES
const getExampleWithID = (id) => {
  return db.query("SELECT * FROM examples WHERE id = $1;", [id]).then((res) => {
    console.log("whats res.rows[0]", res.rows[0]);
    return res.rows[0];
  });
};

exports.getExampleWithID = getExampleWithID;

// USERS QUERIES

//user collections
const getCatsCollections = (id) => {
  return db
    .query(
      `SELECT cats.id, cat_name, image_url, description, date_unlocked
FROM cats 
JOIN user_unlocked_cats on cat_id = cats.id
JOIN users on users.id = user_id
WHERE users.id = $1`,
      [id]
    )
    .then((res) => res.rows)
    .catch((err) => console.error("query getCatsCollections error", err.stack));
};
exports.getCatsCollections = getCatsCollections;

//todo

const getTodos = (id) => {
  return db
    .query(
      `SELECT actions.id, user_id, action_name, date_created, is_completed
      FROM actions 
      JOIN categories on category_id = categories.id
      WHERE categories.id = 1 and user_id = $1`,
      [id]
    )
    .then((res) => res.rows)
    .catch((err) => console.error("query getTodos error", err.stack));
};
exports.getTodos = getTodos;

//habit

const getHabits = (id) => {
  return db
    .query(
      `SELECT actions.id, user_id, action_name, date_created, is_completed
      FROM actions 
      JOIN categories on category_id = categories.id
      WHERE categories.id = 2 and user_id = $1`,
      [id]
    )
    .then((res) => res.rows)
    .catch((err) => console.error("query getHabits error", err.stack));
};
exports.getHabits = getHabits;
