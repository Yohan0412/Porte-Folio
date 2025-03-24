CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');

CREATE TABLE projet (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  projet_name varchar(255) NOT NULL,
  contenu TEXT,       
  path_image VARCHAR(255),
  tech_front VARCHAR(255),
  tech_back VARCHAR(255),
)

CREATE TABLE projets_technologies (
    projet_id INT,
    technologie_id INT,
    FOREIGN KEY (projet_id) REFERENCES projets(id),
    FOREIGN KEY (technologie_id) REFERENCES technologies(id),
    PRIMARY KEY (projet_id, technologie_id)
);
