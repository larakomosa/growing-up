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

module.exports = choresRouter;
