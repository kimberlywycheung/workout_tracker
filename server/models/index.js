var pool = require('../db/postgres.js');

module.exports = {
  getWorkouts: (username, cb) => {
    pool
      .query(`SELECT * FROM urls`)
      .then(({ rows }) => cb(rows))
      .catch((err) => console.log(err));
  },

  postURL: (url, cb) => {
    pool
      .query(`INSERT INTO urls (url) VALUES ('${url}') RETURNING id;`)
      .then(({ rows }) => cb(rows[0].id))
      .catch((err) => console.log(err));
  },

  postWorkout: (body, cb) => {
    pool
      .query(`SELECT * FROM urls`)
      .then(({ rows }) => cb(rows))
      .catch((err) => console.log(err));
  },

  updateWorkout: (body, cb) => {
    pool
      .query(`SELECT * FROM urls`)
      .then(({ rows }) => cb(rows))
      .catch((err) => console.log(err));
  },
};