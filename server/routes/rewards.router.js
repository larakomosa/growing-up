const express = require('express');
const pool = require('../modules/pool');
const rewardsRouter = express.Router();

// GET - retrieve all rewards from DB
rewardsRouter.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "rewards" ORDER BY "id" DESC;';

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

rewardsRouter.get('/conf', (req, res) => {
  const queryText = 'SELECT * FROM "rewards" ORDER BY "id" DESC;';

  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Server Side 1 Movie Error', 500);
    });
});

// create query to insert item
rewardsRouter.post('/', (req, res) => {
  const rewards = req.body;
  const queryText = `INSERT INTO "rewards" ("reward", "image", "coin_price", "description", "selected") 
    VALUES ($1, $2,$3,$4, false);`;

  const queryArray = [
    rewards.reward,
    rewards.image,
    rewards.coin_price,
    rewards.description,
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

// DELETE - remove a single reward from DB
rewardsRouter.delete('/:Id', (req, res) => {
  const rewardsId = req.params.Id;
  const queryText = `DELETE FROM "rewards" WHERE "id"=$1;`;

  pool
    .query(queryText, [rewardsId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// PUT - updates purchase status on a specific reward
rewardsRouter.put('/:Id', (req, res) => {
  const rewardsId = req.params.Id;
  // const status = req.body;
  const queryText = `UPDATE "rewards" SET "purchased"=true WHERE "id"=$1;`;

  pool
    .query(queryText, [rewardsId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = rewardsRouter;
