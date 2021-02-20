
# Growing Applications
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## About

Growing up is a fun, kid-friendly parent/child application that assists children in middle childhood (5-9 years old) develop good habits, practice responsibility and acknowledge their own emotions and feelings with positive reinforcement. Admin users assign chores to a child user who will complete them to earn coins. Admin users also have the ability to assigned rewards so they display on a "Store" on the child side of this application. These rewards can purchase using earned coins.

As a child opens their application, they are prompted to a brief mental health/emotion survey that gives the child a chance to convey their emotions, sleep and anxiety levels for the day as well. Surveyed information will be stored on an admin page so it can be tracked and monitored. Very often, children feel more comfortable writing or sharing their feelings through non-verbal communication. Middle childhood is an important and sometimes awkward transition! As kids progress towards more independence, this application can be a helpful tool to guide them!

To see a full demo of this application, view this video: https://vimeo.com/492727359

## Screenshots
![image](https://user-images.githubusercontent.com/67838283/106369255-7ac31380-6315-11eb-8d70-c147677a4fa6.png)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `growing_up` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "page_role_id" int
);
```

If you would like to name your database something else, you will need to change `growing_up` to the name of your new database name in `server/modules/pool.js`

## INSTALLATION

Create a database named your database name,
The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
Open up your editor of choice and run an npm install
Run npm run server in your terminal
Run npm run client in your terminal
The npm run client command will open up a new browser tab for you!

## Usage
Steps:

Note: For testing purposes, test accounts and data are currently initialized with the project upon build. These lines can be removed and are not entirely necessary, but may prove helpful as a tool to show off the application

Register and/or login to the application. If you’re creating a new account, register and select your page role.

After logging into an admin account, you see the Landing (Welcome) Page. Note, you can also reach this page by selecting ‘Home’ in the top nav bar.

The Landing Page lists currently registered users. A registration form gives the option add additional child users. 

Using the Navigation Bar, you can view the chores, reward and emotion databases.  You can also assign chores and rewards to each child by selecting their name is the drop down box on the assign page. 

After logging into the child account, the child will be prompted to a brief mental health survey.  Following the survey, they will be directed to a homepage.  For here, they will have the ability to view chores and rewards by clicking on their respective icons.

As chores are completed, they will select the finish buttons and coins will be added to their piggy bank (in the header).  This coins can be redeamed to receive rewards. As rewards are purchase, the coins in the piggy bank will be adjusted accordingly.

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Built With
Javascript
React
React-redux
Redux-saga
Node.js
Express
Amazon S3 API
PostgreSQL
Heroku

## License
MIT

## Note, include this only if you have a license file. GitHub will generate one for you if you want!

## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at youremail@whatever.com
