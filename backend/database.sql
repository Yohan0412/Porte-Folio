

('Site E-commerce', 'Un site de vente en ligne.', '/images/ecommerce.jpg', '2023-05-10'),




INSERT INTO technologie (nom, type) VALUES
('React', 'Frontend'),
('Angular', 'Frontend'),
('Vue.js', 'Frontend'),
('Threejs', 'Frontend'),
('Express', 'Backend'),
('Node.js', 'Backend'),
('Django', 'Backend'),
('Laravel', 'Backend'),
('PostgreSQL', 'BDD'),
('MongoDB', 'BDD'),
('Mysql', 'BDD');

CREATE TABLE project (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_1 VARCHAR(255),
    image_2 VARCHAR(255),
    link VARCHAR(255);
);

CREATE TABLE projet_technologie (
    id_project INT,
    id_technologie INT,
    PRIMARY KEY (id_project, id_technologie),
    FOREIGN KEY (id_project) REFERENCES project(id) ON DELETE CASCADE,
    FOREIGN KEY (id_technologie) REFERENCES technologie(id) ON DELETE CASCADE
);


CREATE TABLE technologie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    type ENUM('Frontend', 'Backend', 'BDD') NOT NULL
);

CREATE TABLE project_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);


CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);
