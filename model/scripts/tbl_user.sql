USE AVENTURAPET;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT  INTO users (name, password_hash) VALUES ('first', '123456789');

DELETE * FROM users WHERE id = 1;

ALTER TABLE users RENAME Users;

ALTER TABLE Users DROP COLUMN password_hash;


