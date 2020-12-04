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

choresRouter.get('/table', (req, res) => {
  const queryText =
    'SELECT "chores".chore, "chores".coin_value, "chores".description FROM "chores" ORDER BY "id" DESC;';

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

choresRouter.get('/conf', (req, res) => {
  const queryText = `SELECT "chores".chore, "chores".coin_value, "category".icon, "chores".description FROM "chores"
JOIN "category" ON "chores".category_id = "category".id
ORDER BY "chores".id DESC`;

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
  console.log('payload', req.body);
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

// DELETE - remove a single chore from assigned DB
choresRouter.delete('/:Id', (req, res) => {
  const choresId = req.params.Id;
  const queryText = `DELETE FROM "chores" WHERE "id"=$1;`;

  pool
    .query(queryText, [choresId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = choresRouter;
