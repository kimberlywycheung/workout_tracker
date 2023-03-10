DROP DATABASE IF EXISTS workouts;

CREATE DATABASE workouts;
\connect workouts;

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  url VARCHAR(1000) NOT NULL,
  date VARCHAR(1000) NOT NULL,
  title VARCHAR(1000) NOT NULL,
  channel VARCHAR(1000) NOT NULL,
  thumbnail VARCHAR(1000) NOT NULL,
  difficulty INTEGER DEFAULT 0,
  rating INTEGER DEFAULT 0,
  category VARCHAR(1000) NOT NULL,
  notes VARCHAR DEFAULT '',
  length_in_min INTEGER DEFAULT 0
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(1000) NOT NULL,
  workout_id INTEGER NOT NULL,
  FOREIGN KEY (workout_id) REFERENCES workouts(id)
);

-- CREATE TABLE urls (
--   id SERIAL PRIMARY KEY,
--   url VARCHAR(1000) NOT NULL
--   title VARCHAR(1000) NOT NULL,
--   category VARCHAR(1000) NOT NULL,
--   length INTEGER NOT NULL,
--   instructor VARCHAR(1000) NOT NULL
-- );

-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(1000) NOT NULL
-- );

-- CREATE TABLE workouts (
--   id SERIAL PRIMARY KEY,
--   url_id INTEGER NOT NULL,
--   user_id INTEGER NOT NULL,
--   difficulty INTEGER DEFAULT 0,
--   rating INTEGER DEFAULT 0,
--   notes VARCHAR DEFAULT '',
  -- FOREIGN KEY (url_id) REFERENCES urls(id),
  -- FOREIGN KEY (user_id) REFERENCES users(id)
-- );

