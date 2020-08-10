Create table Groupe(
    id SERIAL PRIMARY KEY
);

Create table User(
    id SERIAL PRIMARY KEY,
    nom varchar(255),
    prenom varchar(255),
);
Create table Compte(
    id SERIAL PRIMARY KEY,
    idUser int,
    password varchar(255),
    login varchar(255),

    foreign key idUser references User(id)
);

Create table GroupeRegister(
    id SERIAL PRIMARY KEY,
    idGroupe int,
    idUser int,

    foreign key idGroupe references Groupe(id)
    foreign key idUser references User(id)
);


Create table Recette(
    id SERIAL PRIMARY KEY
);

Create table CourseRaw(
    id SERIAL PRIMARY KEY
);

Create table Recette(
    id SERIAL PRIMARY KEY
);

Create table Ingredient(
    id SERIAL PRIMARY KEY
);
