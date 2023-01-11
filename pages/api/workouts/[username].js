const models = require('../../../server/models/index.js');

export default function handler(req, res) {
  const reqMethod = req.method;
  const username = req.query.username;
  const body = req.body;

  switch (reqMethod) {
    case 'GET':
      models.getWorkouts(username, (data, err) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(200).send(data);
        }
      });

      break;

    case 'POST':
      models.postURL(body, (data, err) => {
        if (err) {
          res.status(401).send(err);
        } else {
          res.status(201).send(data);
        }
      });

      break;

    case 'PUT':
      models.updateWorkout(body, (data, err) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.status(204).send('updated');
        }
      });

      break;
    }
}