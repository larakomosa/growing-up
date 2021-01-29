const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const page_role_id = req.body.page_role_id;

  const queryText = `INSERT INTO "user" (username, password, page_role_id)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, page_role_id])
    .then((result) => {
      console.log('New Child Id:', result.rows[0].id); //ID IS HERE!
      const createdChildId = result.rows[0].id;
      if (page_role_id == 4) {
        `
      INSERT INTO "parent_child" ("parent_id", "child_id")
      VALUES  ($1, $2);
      `;
        // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
        pool
          .query([req.user.id], [createdChildId])
          .then((result) => {
            //Now that both are done, send back success!
            res.sendStatus(201);
          })
          .catch((err) => {
            // catch for second query
            console.log(err);
            res.sendStatus(500);
          });
      }
      // Catch for first query
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/fullList', (req, res) => {
  const queryText = `SELECT "user".id, "user".username, "page_role".page_role FROM "user"
JOIN "page_role" ON "user".page_role_id = "page_role".id 
ORDER BY "user".id`;

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

router.get('/list', (req, res) => {
  const queryText = `SELECT "user".id, "user".username, "page_role".page_role FROM "user"
JOIN "page_role" ON "user".page_role_id = "page_role".id 
WHERE "user".page_role_id = 4 
ORDER BY "user".id`;

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

module.exports = router;
