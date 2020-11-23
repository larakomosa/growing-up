const express = require('express');
const pool = require('../modules/pool');
const emotionsRouter = express.Router();

emotionsRouter.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "emotions" ORDER BY "id" DESC;';

  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

emotionsRouter.post('/', (req, res) => {
  const emotions = req.body;
  const queryText = `INSERT INTO "emotions" ("date", "child_id", "feelings", "sleep", "anxiety", "comment") 
    VALUES (CURRENT_TIMESTAMP, $1, $2,$3,$4,$5);`;

  const queryArray = [
    emotions.child_id,
    emotions.feelings,
    emotions.sleep,
    emotions.anxiety,
    emotions.comment,
  ];

  pool
    .query(queryText, queryArray)
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = emotionsRouter;
