const express = require('express');
const pool = require('../modules/pool');
const storeRouter = express.Router();

storeRouter.get('/', (req, res) => {
  const queryText = `SELECT "rewards".id, "store".child_id, "user".username, "rewards".reward, "rewards".coin_price, "rewards".purchased FROM "rewards"
JOIN "store" ON "store".reward_id = "rewards".id
JOIN "user" ON "store".child_id = "user".id
ORDER BY "store".id`;

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

storeRouter.get('/:child', (req, res) => {

const queryText = `SELECT "store".id, "rewards".id, "rewards".reward, "rewards".coin_price, "rewards".image FROM "rewards"
JOIN "store" ON "store".reward_id = "rewards".id 
JOIN "user" ON "store".child_id = "user".id  
WHERE "user".id = $1
ORDER BY "store".id`; 

  pool
    .query(queryText, [req.user.id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Server Side 1 Movie Error', 500);
    });
});

storeRouter.get('/details/:id', (req, res) => {

const queryText = `SELECT "store".id, "rewards".id, "rewards".reward, "rewards".coin_price, "rewards".image FROM "rewards"
JOIN "store" ON "store".reward_id = "rewards".id 
JOIN "user" ON "store".child_id = "user".id  
WHERE "store".id = $1`

pool
    .query(queryText, [req.params.id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Server Side 1 Movie Error', 500);
    });
});

storeRouter.post('/', (req, res) => {
  const store = req.body;
  const queryText = `INSERT INTO "store" ("child_id", "reward_id", "purchase_status") 
    VALUES ($1, $2, false);`;

  const queryArray = [store.child_id, store.reward_id];

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

module.exports = storeRouter;
