const express = require('express');
const pool = require('../modules/pool');
const bankRouter = express.Router();

bankRouter.get('/:Id', (req, res) => {
  const queryText = `SELECT * FROM "bank" WHERE "child_id"=$1`;

  pool
    .query(queryText, [req.params.Id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

bankRouter.post('/:Id', (req, res) => {
  const child_id = req.params.Id;
  const bank = req.body;
  const queryText = `INSERT INTO "bank" ("child_id", "total") 
    VALUES ($1, $2);`;

  const queryArray = [child_id, bank.total];

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

module.exports = bankRouter;
