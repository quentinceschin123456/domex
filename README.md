# Projet web pour la gestion de la vie en communauté : 

 * gestion des courses
 * gestion des repas --> générateur d'idée de repas + gestion frigo
 * calendrier
 * TODO list
 * page de texte libre (consigne pour le tri ,...)
 * Programme sportif + suivi de régime (Système de score pour se motiver ?) 
 * Panneau d'administration des utilisateurs , leurs roles et les privilèges

 les différentes features doivent être associées à des utilisateurs ou groupes d'utilisateur
 un utilisateur ne doit pouvoir accéder qu'aux features qui le concernent.

 ## Gestion des courses : CRUD
On veut pouvoir gérer plusieurs listes de courses partagées entre plusieurs utilisateurs

CRUD d'ingrédients disponibles dans l'application


Il s'agit d'une liste de course insipirée de l'application "bring"

 Une liste de carte qui présente une icone, un texte principal, un texte additionnel

 Un champs de recherche permet sélectionner un item pour la liste
 clicker sur l'item dans la liste le supprime -> click droit - retirer de la liste
 rester appuyer permet d'ajouter des informations -> click gauche = affiche les détails de l'élément sélectionné

Rechercher si possbile d'utiliser une API bring pour injecter la liste de course dans l'applciation
mobile


 ## Gestion des repas 
  
### Une liste de recette : CRUD
On veut un crud de recette et un affichage en liste

liste de carte avec une photo , un nom , une description rapide d'une recette
une carte dispose d'une vue détaillée qui présente :
    - la liste des ingrédients
    - la recette 
    - les informations nutrionnels
    - des tags (healthy, plaisir, poulet , alergène, ect)

Depuis la liste de recette, on veut pouvoir ajouter tous les ingrédients avec les quantités et les informations nécessaires dans une liste de course (Dans un premier temps, une liste de course déjà existante, sinon pourvoir la créer à la volée comme playlist youtube)



### Un moteur de proposition de recette
Inspiré de marmitton, a partir du contenu du frigo/reserve on récupère une liste de recette. 

A partir d'une liste d'ingrédient, je veux avoir des proposition de plusieurs recettes.
je veux pouvoir donner des contraintes sur la recette :
- liste de tags autorisés/bannis
- aliments autorisés/bannis 
- en prennant en compte la date de péremption des produits ( WARNING à réfléchir car complexité)


## TODO list
On veut gérer une liste de TODO list.
Une todolist est partagée avec des utilisateurs ou des groupes d'utilisateurs


## Calendrier
calendrier partagée, on veut pouvoir poser des slots sur le calendrier avec :
- un label
- une date et heure(optionnel)
- un description
- une liste d'utilisateurs concernés

## Page libre
Tableau de notes avec un éditeur permettant d'écrire du texte, d'inclure des images/videos

une note concerne des utilisateurs ou groupes d'utilisateurs

## Programme sportif/aliementaire
Module sensible, à ne peut être pas dev

Permet de faire un suivi des apports alimentaire pour l'utilisateur courant
CRUD de repas ( se baser sur la liste des recette + d'ingrédients)
Affichage avec des graphiques, charts ect des données
Suivi de poids ( Données sensibles ?)
tableau (style calendrier mode semaine) affichant les repas
récapitulatif kcal dans la colonne + détails (au survol ? autre page ?)
pouvoir indiquer une quantité d'eau bu dans la journée (chammps libre)


## Panneau d'administration
CRUD des utilisateurs
CRUD des roles (admin / user / superuser / etc)
CRUD des groupes (id, nom, list<User>)
Gestion association feature - utilisateur/group d'utilisateur

CRUD des tags 
Moteur d'annotation (on créer des règles/condition pour attribuer des tags à des items)

Page pour gérér des settings relatifs à l'authentifcation (OAuth2 de google ou un truc du genre)

# TaskList : 

## Découpe et inventaire
[ ] - Lister les fonctionnalités
[ ] - Lister les pages / services
[ ] - 

## Maquettage
[ ] - Design des layout
[ ] - Design des pages principales
[ ] - Design autour des utilisateur (page gestion ou affichage dans l'appli, ex:bulle)
[ ] - Design des composants communs
[ ] - Design des composants spécifiques
[ ] - 

## Architecture logiciel
[ ] - Modele de données business
[ ] - Modele de base de données + données de tests/mock
[ ] - Créer une application VueJS 3 vide avec les plugins (Vuetify, store, etc) 
[ ] - Conception logiciel, découpe en module , bonne pratique ,etc
[ ] - 


# Notes :

Ingredient est un itemAchetable( prévoir cette classe pour différencier le commestible des items classiques et ne pas les compter pour les estimations en calories)

possibilité de créer un webscrapper pour récupérer les prix MAIS très compliquer à maintenir
et il faut prévoir des modules de scrappe pour chaque magasin + matcher les 
articles avec les ingrédients



  git remote add github https://github.com/quentinceschin123456/domex.git
   
   
   git push -u github master
   
   
   git config --global alias.pushall '!git remote | xargs -L1 git push --all'


heroku cconfig example = https://github.com/heroku/node-js-getting-started.git