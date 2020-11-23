
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

('outside', 'https://primebucket2020.s3.us-east-2.amazonaws.com/014-rake.svg'),
('laundry', 'https://primebucket2020.s3.us-east-2.amazonaws.com/003-washing-machine.svg'),
('kitchen', 'https://primebucket2020.s3.us-east-2.amazonaws.com/007-kitchen.svg'),
('cleaning', 'https://primebucket2020.s3.us-east-2.amazonaws.com/001-cleaning.svg'),
('kindness', 'https://primebucket2020.s3.us-east-2.amazonaws.com/006-letter-1.svg');