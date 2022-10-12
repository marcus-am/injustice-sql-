DROP TABLE IF EXISTS person;

CREATE TABLE person (
    person_id INT GENERATED ALWAYS AS IDENTITY,
    person_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (person_id)
);

DROP TABLE IF EXISTS wrong;

CREATE TABLE wrong (
    wrong_id INT GENERATED ALWAYS AS IDENTITY,
    perpetrator_id INT NOT NULL,
    victim_id INT NOT NULL,
    description VARCHAR(200),
    forgiven BOOLEAN DEFAULT FALSE,
    forgotten BOOLEAN DEFAULT FALSE,
    revenged BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (wrong_id),
    FOREIGN KEY (perpetrator_id) REFERENCES person(person_id),
    FOREIGN KEY (victim_id) REFERENCES person(person_id)
);