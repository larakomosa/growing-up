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

emotionsRouter.get('/notes', (req, res) => {
  const queryText = 'SELECT * FROM "parentNotes" ORDER BY "id" DESC;';

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

emotionsRouter.post('/notes', (req, res) => {
  const notes = req.body;
  const queryText = `INSERT INTO "parentNotes" ("child_id", "admin_id", "message") 
    VALUES ($1, $2,$3)`;

  const queryArray = [notes.child_id, notes.admin_id, notes.message];

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
