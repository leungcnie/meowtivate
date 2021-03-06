DROP TABLE IF EXISTS logDatas CASCADE;

CREATE TABLE logDatas (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date_created DATE DEFAULT CURRENT_DATE,
  is_completed BOOLEAN DEFAULT FALSE
);