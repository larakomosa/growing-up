const express = require('express');
const pool = require('../modules/pool');
const choresRouter = express.Router();

choresRouter.get('/category', (req, res) => {
  const queryText = 'SELECT * FROM "category" ORDER BY "id" DESC;';

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

choresRouter.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "chores" ORDER BY "id" DESC;';

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

choresRouter.post('/', (req, res) => {
  const chores = req.body;
  const queryText = `INSERT INTO "chores" ("chore", "category_id", "coin_value", "description") 
    VALUES ($1, $2,$3,$4);`;

  const queryArray = [
    chores.chore,
    chores.category_id,
    chores.coin_value,
    chores.description,
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

choresRouter.get('/assigned', (req, res) => {
  const queryText = 'SELECT * FROM "assigned" ORDER BY "id" DESC;';

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

choresRouter.post('/assigned', (req, res) => {
  const assigned = req.body;
  const queryText = `INSERT INTO "assigned" ("child_id", "chore_id", "completion_status") 
    VALUES ($1, $2,false);`;

  const queryArray = [assigned.child_id, assigned.chore_id];

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

module.exports = choresRouter;
