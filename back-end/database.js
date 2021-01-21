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

// EXAMPLES insert QUERIES
const getExample = (text) => {
  return db
    .query(
      `INSERT INTO examples (text)
    VALUES ($1)
    RETURNING *;`,
      [text]
    )
    .then((res) => {
      console.log("whats res.rows[0]", res.rows);
      return res.rows;
    });
};

exports.getExample = getExample;

//update example
const updateExample = (id, text) => {
  return db
    .query(
      `UPDATE examples
  SET text = $2 
  WHERE id = $1;`,
      [id, text]
    )
    .then((res) => {
      console.log("whats res.rows[0]", res.rows);
      return res.rows;
    });
};
exports.updateExample = updateExample;

//delete example
const deleteExample = (id) => {
  return db.query(`DELETE FROM examples WHERE id = $1;`, [id]).then((res) => {
    console.log("whats res.rows[0]", res.rows);
    return res.rows;
  });
};

exports.deleteExample = deleteExample;

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

// --------- todo -------
//create todo
const createTodo = (action_name) => {
  return db
    .query(
      `INSERT INTO actions (user_id,category_id,action_name,date_created,is_completed)
      VALUES (1, 1, $1, CURRENT_DATE, false)
      RETURNING *;`,
      [action_name]
    )
    .then((res) => {
      console.log("createTodo", res.rows[0]);
      return res.rows[0];
    })
    .catch((error) => console.log(error));
};

exports.createTodo = createTodo;

//get todo
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

// create habit

const createHabit = (action_name) => {
  return db
    .query(
      `INSERT INTO actions (user_id,category_id,action_name,date_created,is_completed)
      VALUES (1, 2, $1, CURRENT_DATE, false)
      RETURNING *;`,
      [action_name]
    )
    .then((res) => {
      console.log("createHabit", res.rows[0]);
      return res.rows[0];
    })
    .catch((error) => console.log(error));
};

exports.createHabit = createHabit;

//get habit list

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

//updateName habit | todo

const updateName = (id, action_name, is_completed) => {
  return db
    .query(
      `UPDATE actions
      SET action_name = $2, is_completed = $3
      WHERE id = $1;`,
      [id, action_name, is_completed]
    )
    .then((res) => {
      console.log("whats res.rows[0]", res.rows);
      return res.rows;
    });
};
exports.updateName = updateName;

//update is_completed
const updateState = (id, is_completed) => {
  return db
    .query(
      `UPDATE actions
      SET is_completed = $2
      WHERE id = $1;`,
      [id, is_completed]
    )
    .then((res) => {
      console.log("whats res.rows[0]", res.rows);
      return res.rows;
    });
};

exports.updateState = updateState;

//delete habit/todo
const deleteAction = (id) => {
  return db.query(`DELETE FROM actions WHERE id = $1 RETURNING *;`, [id]).then((res) => {
    console.log("whats res.rows[0]", res.rows[0]);
    return res.rows[0];
  });
};

exports.deleteAction = deleteAction;

//get actions
const getActions = (id) => {
  return db
    .query(
      `SELECT actions.id, category_id, user_id, action_name, date_created, is_completed
    FROM actions 
    JOIN categories on category_id = categories.id
    WHERE user_id = $1`,
      [id]
    )
    .then((res) => {
      console.log("whats res.rows[0]", res.rows);
      return res.rows;
    });
};

exports.getActions = getActions;
