/* Importing UUID Extension to type check ------ */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email       varchar(255) UNIQUE NOT NULL,
    password    varchar(100) NOT NULL,
    firstname   varchar(100) NOT NULL,
    lastname    varchar(10) NOT NULL, 
    phone       varchar(10),
    address     varchar(255),
    role        boolean NOT NULL DEFAULT false --false = client / true = admin
);