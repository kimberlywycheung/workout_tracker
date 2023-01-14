var pool = require('../db/postgres.js');

module.exports = {
  getWorkouts: (username, cb) => {
    if (username === 'all') {
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
    } else if (username === 'summary') {
      pool
        .query(`
          SELECT DISTINCT title, COUNT(id) as count, AVG(rating) as rating, AVG(difficulty) as difficulty, url, thumbnail
          FROM workouts
          GROUP BY title, url, thumbnail;
        `)
          .then(({ rows }) => cb(rows))
          .catch((err) => console.log(err));
    }
  },

  postWorkout: (body, cb) => {
    pool
      .query(`
        INSERT INTO workouts (url, date, title, channel, thumbnail, rating, difficulty, category, notes, length_in_min)
        VALUES ('${body.url}', '${body.data.date}', '${body.data.title}', '${body.data.channel}', '${body.data.thumbnail}', ${body.data.rating},
        ${body.data.difficulty}, '${body.data.category}', '${body.data.notes}', ${body.data.minutes}) RETURNING id;
      `)
      .then(({ rows }) => {
        if (body.data.tags.length === 0) {
          cb();
        }

        let queryValues = [];

        body.data.tags.map((tag) => {
          queryValues.push(`('${tag}', ${rows[0].id})`);
        });

        console.log(queryValues.join(', '));

        pool.query(`
          INSERT INTO tags (name, workout_id)
          VALUES ${queryValues.join(', ')};
        `)
          .then(() => cb());
      })
      .catch((err) => console.log(err));
  },

  // updateWorkout: (body, cb) => {
  //   pool
  //     .query(`SELECT * FROM urls`)
  //     .then(({ rows }) => cb(rows))
  //     .catch((err) => console.log(err));
  // },

  getTags: (cb) => {
    pool
      .query(`SELECT DISTINCT name FROM tags;`)
      .then(({ rows }) => cb(rows))
      .catch((err) => console.log(err));
  }
};