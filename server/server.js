const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const emotionsRouter = require('./routes/emotions.router');
const choresRouter = require('./routes/chores.router');
const rewardsRouter = require('./routes/rewards.router');
const bankRouter = require('./routes/bank.router');
const assignedRouter = require('./routes/assigned.router');
const storeRouter = require('./routes/store.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/emotions', emotionsRouter);
app.use('/api/chores', choresRouter);
app.use('/api/rewards', rewardsRouter);
app.use('/api/bank', bankRouter);
app.use('/api/assigned', assignedRouter);
app.use('/api/store', storeRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
