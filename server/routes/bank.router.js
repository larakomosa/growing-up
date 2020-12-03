const express = require('express');
const pool = require('../modules/pool');
const bankRouter = express.Router();

bankRouter.get('/rewards', (req, res) => {
  const queryText = `SELECT "store".child_id, SUM (coin_price) FROM "store" JOIN "rewards" ON "store".reward_id = "rewards".id WHERE 
"store".purchase_status AND "store".child_id = $1 GROUP BY "store".child_id`;

  pool
    .query(queryText, [req.user.id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

bankRouter.get('/chores', (req, res) => {
  const queryText = `SELECT "assigned".child_id, SUM (coin_value) FROM "assigned" JOIN "chores" ON "assigned".chore_id = "chores".id WHERE "assigned".completion_status AND "assigned".child_id = $1 GROUP BY "assigned".child_id`;

  pool
    .query(queryText, [req.user.id])
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
