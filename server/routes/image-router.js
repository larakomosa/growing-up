const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */

router.post('/', (req, res) => {
  console.log('hi', req.body);
  res.sendStatus(200);
});

module.exports = router;
