DROP TABLE IF EXISTS prisoners;

CREATE TABLE prisoners (
id uuid PRIMARY KEY,
surname text NOT NULL,
name text NOT NULL,
lastname text,
birthday date
);