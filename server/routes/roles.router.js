const express = require('express');
const pool = require('../modules/pool');
const rolesRouter = express.Router();

/**
 * GET route template
 */
rolesRouter.get('/', (req, res) => {
  // GET route code here
  pool
    .query('SELECT * FROM "page_role" ORDER BY "page_role" ASC;')
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = rolesRouter;