/* Importing UUID Extension to type check ------ */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email       varchar(255) UNIQUE NOT NULL,
    password    varchar(100) NOT NULL,
    username    varchar(100) NOT NULL,
    phone       varchar(10),
    role        boolean NOT NULL DEFAULT false --false = client / true = admin
);