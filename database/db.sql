CREATE DATABASE postgres;

\l

\c postgres;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    sobrenome VARCHAR,
    sexo VARCHAR,
    idade NUMERIC
);

INSERT INTO users (name, sobrenome, sexo, idade)
    VALUES (1, "Leonardo", "Linton", "M", 27),
    (2, "Luana", "Emily", "F", 21),
    (3, "Pedro", "Souza", "M", 13),
    (4, "Joao", "Oliveira", "M", 15),
    (5, "Thais", "Oliveira", "F", 16),
    (6, "Cesar", "Sousa", "M", 20);

select * from users;