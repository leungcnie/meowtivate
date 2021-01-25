DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  current_streak INTEGER DEFAULT 0
);


-- DROP TABLE IF EXISTS logData CASCADE;

-- CREATE TABLE logData (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id VARCHAR(255) NOT NULL,
--   date INTEGER DEFAULT 0
--   all_completed true
-- );

-- 2021-01-01
-- 2021-01-02
-- 2021-01-03

-- [1,2,3,4,5,11,24] -> 

-- DROP TABLE IF EXISTS users CASCADE;

-- CREATE TABLE streak (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id VARCHAR(255) NOT NULL,
--   streak INTEGER DEFAULT 0
--   current_streak INTEGER DEFAULT 0
-- );

-- --  if today _ all complete
-- current_streak - 1

-- -> if current_streak > streak 
-- the streak is going to update ()
--  1 > 0

--  -> streak 1 
--  -> current_streak 1 

--  ------------
-- -> streak 5
-- -> current_streak = 0

