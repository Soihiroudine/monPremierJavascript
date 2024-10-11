// FONCTIONS
// Ce Sont des opérations qui effectuent des opérations et retourne un resulthat
// Avantage : Peut être réutiliser plusieurs fois

function presentation(nom) {
    return "Je suis " + nom;
}

// alert(presentation("cazers"));

// Fonction pour faire de l'addition entre deux valeurs et retourne la valeurs entre les deux
function addition(nombre1, nombre2) {
    return(nombre1 + nombre2);
}

// Appelle de fonction
let prix1 = addition(4, 5);
let prix2 = addition(40, 43)
// alert(prix1);
// alert(prix2);


/**
 * L'objet Date() permet de recuperer la date actuelle
 * 
 * On veut recuperer que l'année alors on utilise la methode getFullYear()
 * 
 * Après on fait ce dont notre fonction est conçu : année actuelle moins l'année de naissance
 * 
   */
function age(annee) {
    const anneeActuelle = new Date().getFullYear();
    return anneeActuelle - annee;
}

// 
/**
 * Autre façon d'avoir notre age
 * 
 * @param anneeNaissance type number 
 * @param anneeActuelle type number
 * 
 * 
 *  */
function agePersonne(anneeNaissance, anneeActuelle) {
    return anneeActuelle - anneeNaissance;
}

// Appelle des fonctions
let person1Age = age(2003);

alert("Perso1 a " + person1Age + " ans.");

let agePerso2 = agePersonne(2004, 2024);
alert("Il a actuellement " + agePerso2 + " ans.");