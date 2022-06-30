DROP TABLE IF EXISTS prisoners;

CREATE TABLE prisoners (
id SERIAL PRIMARY KEY,
name text NOT NULL,
sirname text NOT NULL,
patronimic text,
birthday date
personnelNumber integer
);