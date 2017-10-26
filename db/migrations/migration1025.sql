\c todo
DROP TABLE IF EXISTS list;
CREATE TABLE IF NOT EXISTS list(
  id SERIAL PRIMARY KEY,
  chore VARCHAR,
  description VARCHAR,
  status VARCHAR
);
