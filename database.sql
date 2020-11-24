
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "chores" (
  "id" SERIAL PRIMARY KEY,
  "chore" varchar,
  "category_id" int REFERENCES "category",
  "coin_value" int,
  "description" varchar
);

INSERT INTO "chores" ("chore", "category_id", "coin_value", "description") 
VALUES 
('Rake Leaves', 1, 5, 'rake and bag leaves in front yard'),
('Sort Socks', 2, 3, 'sort socks and deliver to rooms'),
('Dry Dishes', 3, 2, 'dry clean dishes and put away'),
('Sweep Entry Way', 4, 2, 'sweep entry way and use dust pan'),
('Call Grandma', 5, 3, 'call grandma and ask her about her day') 
 
 
 CREATE TABLE "assigned" (
  "id" SERIAL PRIMARY KEY,
  "child_id" int REFERENCES "user",
  "chore_id" int REFERENCES "chores",
  "completion_status" boolean
);

CREATE TABLE "rewards" (
  "id" SERIAL PRIMARY KEY,
  "reward" varchar,
  "image" varchar,
  "coin_price" int,
  "description" varchar
);

('outside', 'https://primebucket2020.s3.us-east-2.amazonaws.com/014-rake.svg'),
('laundry', 'https://primebucket2020.s3.us-east-2.amazonaws.com/003-washing-machine.svg'),
('kitchen', 'https://primebucket2020.s3.us-east-2.amazonaws.com/007-kitchen.svg'),
('cleaning', 'https://primebucket2020.s3.us-east-2.amazonaws.com/001-cleaning.svg'),
('kindness', 'https://primebucket2020.s3.us-east-2.amazonaws.com/006-letter-1.svg');

