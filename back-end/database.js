// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// EXAMPLES QUERIES
const getExampleWithID = (id) => {
  return db.query('SELECT * FROM examples WHERE id = $1;', [id])
    .then(res => {
      console.log("whats res.rows[0]", res.rows[0]);
      return res.rows[0];
    })
}

exports.getExampleWithID = getExampleWithID;

// USERS QUERIES