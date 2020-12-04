const express = require('express');
const pool = require('../modules/pool');
const storeRouter = express.Router();

storeRouter.get('/admin/:Id', (req, res) => {
  const queryText = `SELECT "rewards".id, "store".child_id, "user".username, "rewards".reward, "rewards".coin_price FROM "rewards"
JOIN "store" ON "store".reward_id = "rewards".id
JOIN "user" ON "store".child_id = "user".id
WHERE "user".id = $1
ORDER BY "store".id`;

  pool
    .query(queryText, [req.params.Id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Server Side 1 Movie Error', 500);
    });
});

storeRouter.get('/child/child', (req, res) => {
  const queryText = `SELECT "store".id,"rewards".reward, "store".purchase_status, "rewards".coin_price, "rewards".image, "rewards".description FROM "rewards"
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

storeRouter.get('/selected/:Id', (req, res) => {
  console.log('req', req.params.Id);

  const queryText = `SELECT "store".id,"rewards".reward, "store".purchase_status, "rewards".coin_price, "rewards".image, "rewards".description FROM "rewards"
JOIN "store" ON "store".reward_id = "rewards".id 
JOIN "user" ON "store".child_id = "user".id  
WHERE "store".id = $1`;

  pool
    .query(queryText, [req.params.Id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Selected Store Error', 500);
    });
});

storeRouter.put('/:Id', (req, res) => {
  const assignedId = req.params.Id;
  // const status = req.body;
  const queryText = `UPDATE "store" SET "purchase_status"=true WHERE "id"=$1;`;

  pool
    .query(queryText, [assignedId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
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
