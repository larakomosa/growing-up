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
const rolesRouter = require('./routes/roles.router');
const imageURLRouter = require('./routes/image-router');
const uploaders3Router = require('react-dropzone-s3-uploader/s3router');

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
app.use('/api/roles', rolesRouter);
app.use('/api/imageurl', imageURLRouter);
app.use(
  '/s3',
  uploaders3Router({
    bucket: 'primebucket2020', // required
    region: 'us-east-2', // optional
    headers: { 'Access-Control-Allow-Origin': '*' }, // optional
    ACL: `public-read`, // this is the default - set to `public-read` to let anyone view uploads
  })
);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
