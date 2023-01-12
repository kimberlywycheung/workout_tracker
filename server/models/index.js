var pool = require('../db/postgres.js');

module.exports = {
  getWorkouts: (username, cb) => {
    pool
      .query(`
        SELECT workouts.*, json_agg(tags.name) AS tags
        FROM workouts
        LEFT JOIN tags
          ON workouts.id = tags.workout_id
        GROUP BY workouts.id;
      `)
        .then(({ rows }) => cb(rows))
        .catch((err) => console.log(err));
  },

  postWorkout: (body, cb) => {
    pool
      .query(`
        INSERT INTO workouts (url, title, channel, thumbnail, rating, difficulty, category, notes)
        VALUES ('${body.url}', '${body.title}', '${body.channel}', '${body.thumbnail}', ${body.rating},
        ${body.difficulty}, '${body.category}', '${body.notes}') RETURNING id;
      `)
      .then(({ rows }) => {
        let queryValues = [];
        body.tags.map((tag) => {
          queryValues.push(`('${tag}', ${rows[0].id})`);
        });
        pool.query(`
          INSERT INTO tags (name, workout_id)
          VALUES ${queryValues.join(', ')};
        `)
          .then(() => cb());
      })
      .catch((err) => console.log(err));
  },

  updateWorkout: (body, cb) => {
    pool
      .query(`SELECT * FROM urls`)
      .then(({ rows }) => cb(rows))
      .catch((err) => console.log(err));
  },
};