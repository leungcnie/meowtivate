DROP TABLE IF EXISTS user_unlocked_pots CASCADE;

CREATE TABLE user_unlocked_pots (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  pot_id INTEGER REFERENCES pots(id) ON DELETE CASCADE,
  is_default BOOLEAN default FALSE
);