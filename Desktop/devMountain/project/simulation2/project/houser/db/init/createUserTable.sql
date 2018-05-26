CREATE TABLE Houser (
    id SERIAL primary key,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    img text,
    zip INTEGER,
    mortgage DECIMAL,
    rent DECIMAL
)