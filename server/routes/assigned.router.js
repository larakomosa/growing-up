const express = require('express');
const pool = require('../modules/pool');
const assignedRouter = express.Router();

assignedRouter.get('/admin/:Id', (req, res) => {
  assignedId = req.params.Id;
  console.log('help', req.params.Id);
  const queryText = `SELECT "chores".chore, "chores".coin_value, "assigned".completion_status FROM "assigned"
JOIN "chores" ON "assigned".chore_id = "chores".id
JOIN "user" ON "assigned".child_id = "user".id
WHERE "assigned".child_id = $1`;

  pool
    .query(queryText, [assignedId])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus('Server Side 1 Movie Error', 500);
    });
});

assignedRouter.get('/child', (req, res) => {
  const queryText = `SELECT "chores".chore, "assigned".id , "chores".coin_value, "category".icon, "assigned".completion_status, "chores".description FROM "chores"
JOIN "assigned" ON "assigned".chore_id = "chores".id
JOIN "category" ON "chores".category_id = "category".id
WHERE "assigned".child_id = $1
ORDER BY "assigned".id`;

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

assignedRouter.post('/', (req, res) => {
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

// DELETE - remove a single chore from assigned DB
assignedRouter.delete('/:Id', (req, res) => {
  const assignedId = req.params.Id;
  const queryText = `DELETE FROM "assigned" WHERE "id"=$1;`;

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

// PUT - updates completion status on a specific assigned chore
assignedRouter.put('/:Id', (req, res) => {
  const assignedId = req.params.Id;
  // const status = req.body;
  const queryText = `UPDATE "assigned" SET "completion_status"=true WHERE "id"=$1;`;

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

module.exports = assignedRouter;
