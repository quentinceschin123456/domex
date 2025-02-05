-- permet de définir les groupes d'utilisateurs business pour les triés ou les associés à des comportements
Create table Group(
    id SERIAL PRIMARY KEY,
    name varchar(255)

);
-- Roles au sein de l'application : user / admin / etc
Create table Role(
    id SERIAL PRIMARY KEY,
    name varchar(255)
);
Create table User(
    id SERIAL PRIMARY KEY,
    username varchar(255),
);
Create table Account(
    id SERIAL PRIMARY KEY,
    idUser int,
    idRole int
    password varchar(255),
    login varchar(255),

    foreign key idUser references User(id)
    foreign key idRole references Role(id)
);



Create table GroupeRegister(
    id SERIAL PRIMARY KEY,
    idGroup int,
    idUser int,

    foreign key idGroup references Group(id)
    foreign key idUser references User(id)
);


Create table Recette(
    id SERIAL PRIMARY KEY
);

Create table CourseRaw(
    id SERIAL PRIMARY KEY
);


Create table Ingredient(
    id SERIAL PRIMARY KEY
);
