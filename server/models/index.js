var pool = require('../db/postgres.js');

module.exports = {
  getWorkouts: (username, cb) => {
    pool
      .query(`SELECT * FROM urls`)
      .then(({ rows }) => cb(rows))
      .catch((err) => console.log(err));
  }
};