DROP TABLE IF EXISTS user;
CREATE TABLE user (
 	id int(11) NOT NULL, 
 	pseudo varchar(255)NOT NULL, 
 	email varchar(255)NOT NULL,
 	password char(255)NOT NULL,
 	primary key (id)
 	);


INSERT INTO user (id, pseudo, email, password) VALUES
 	(1, 'maxudev', 'maxudev@hotmail.dev', 'devious1'),
 	(2, 'henocudev', 'henocudev@hotmail.dev', 'devious2'),
 	(3, 'patudev', 'patudev@hotmail.dev', 'devious3'),
 	(4, 'edudev', 'edudev@hotmail.dev', 'devious4'),
 	(5, 'damsudev','damsudev@hotmail.dev', 'devious5');