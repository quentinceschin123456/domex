Projet web pour la gestion de la vie en communauté : 

 * gestion des courses
 * gestion des repas --> générateur d'idée de repas + gestion frigo
 * calendrier
 * TODO list
 * page de texte libre (consigne pour le tri ,...)
 * Programme sportif + suivi de régime (Système de score pour se motiver ?) 

Métier object

ListCourse{
    id
    nom
    CourseRaw[]
}

Recette {
    id
    name
    indiceCalorie(ou des kpi du genre)
    CourseRaw[]
}

CourseRaw{
    id
    Ingredient
    qte
}


ingredient{
    id
    nom
    nomAffichage
    image
}

Ingredient est un itemAchetalble( prévoir cette classe pour différencier le commestible des items classiques et ne pas les compter pour les estimations en calories)

possibilité de créer un webscrapper pour récupérer les prix MAIS très compliquer à maintenir
et il faut prévoir des modules de scrappe pour chaque magasin + matcher les 
articles avec les ingrédients