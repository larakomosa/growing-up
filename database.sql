INSERT INTO "rewards" ("reward", "image", "coin_price", "description")
VALUES 
('Small Lego Set',‘primebucket2020.s3.us-east-2.amazonaws.com/1b838f8d-ab10-41c1-a75b-0fa68f5f3262_insta2.png', 20, ‘LEGO Minecraft 21153 The Wool Farm playset, featuring a farm setting with 2 dyed sheep and a baby sheep.’);


INSERT INTO "chores" ("chore", "category_id", "coin_value", "description") 
VALUES 
('Rake Leaves', 1, 5, 'rake and bag leaves in front yard'),
('Sort Socks', 2, 3, 'sort socks and deliver to rooms'),
('Dry Dishes', 3, 2, 'dry clean dishes and put away'),
('Sweep Entry Way', 4, 2, 'sweep entry way and use dust pan'),
('Call Grandma', 5, 3, 'call grandma and ask her about her day') 

CREATE TABLE "rewards" (
  "id" SERIAL PRIMARY KEY,
  "reward" varchar,
  "image" varchar,
  "coin_price" int,
  "description" varchar
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "page_role_id" int
);

CREATE TABLE "parentNotes" (
  "id" SERIAL PRIMARY KEY,
  "child_id" int REFERENCES "user",
  "admin_id" int REFERENCES "user",
  "message" varchar
);

CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "category" varchar,
  "icon" varchar
);

CREATE TABLE "chores" (
  "id" SERIAL PRIMARY KEY,
  "chore" varchar,
  "category_id" int REFERENCES "category",
  "coin_value" int,
  "description" varchar
);

 
 CREATE TABLE "assigned" (
  "id" SERIAL PRIMARY KEY,
  "child_id" int REFERENCES "user",
  "chore_id" int REFERENCES "chores",
  "completion_status" boolean
);

CREATE TABLE "store" (
  "id" SERIAL PRIMARY KEY,
  "child_id" int REFERENCES "user",
  "reward_id" int REFERENCES "rewards",
  "purchase_status" boolean
);

CREATE TABLE "emotions" (
  "id" SERIAL PRIMARY KEY,
  "date" TIMESTAMP,
  "feelings" INT,
  "sleep" INT,
  "anxiety" INT,
  "comment" varchar
);

Create Table "page_role"(
  "id" INT PRIMARY KEY,
  "page_role" VARCHAR,
  "access_level" int)
  

SELECT "assigned".child_id, SUM (coin_value) FROM "assigned" JOIN "chores" ON "assigned".chore_id = "chores".id WHERE "assigned".completion_status AND "assigned".child_id = '15' GROUP BY "assigned".child_id 


SELECT "store".child_id, SUM (coin_price) FROM "store" JOIN "rewards" ON "store".reward_id = "rewards".id WHERE 
"store".purchase_status AND "store".child_id = '15' GROUP BY "store".child_id 

