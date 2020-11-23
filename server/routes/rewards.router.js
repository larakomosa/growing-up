const express = require('express');
const pool = require('../modules/pool');
const rewardsRouter = express.Router();

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

rewardsRouter.post('/', (req, res) => {
  const rewards = req.body;
  const queryText = `INSERT INTO "rewards" ("reward", "image", "coin_price", "description") 
    VALUES ($1, $2,$3,$4);`;

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

module.exports = rewardsRouter;
