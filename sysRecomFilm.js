// jeu 

/* Créez un système de recommandation qui conseille le bon film en fonction de l’âge de l’utilisateur.
 + Si l’utilisateur a moins de 13 ans, on lui affiche “Le Roi Lyon”.
 + Si l’utilisateur a plus de 13 ans et moins de 18 ans, on lui affiche “Titanic”.
 + Si l’utilisateur a plus que 18 ans, on lui affiche “Rambo 2" 
*/

// Classification des film en fonction du tranche d'age 
let filmEnfant = "Le Roi Lyon";
let filmAdo = "Titanic";
let filmMajorite = "Rambo 2";           

// On selectionner l'age d'un l'utilisateur
let age = 15;

// On va l'orienté en fonction de sa tranche d'age
if (age < 13) {
    console.log("Vous avez " + age + " ans. On vous conseille le film " + filmEnfant);
}else if (age >= 13 && age < 18) {
    console.log("Vous avez " + age + " ans. On vous conseille le film " + filmAdo);
}else {
    console.log("Vous avez " + age + " ans. On vous conseille le film " + filmMajorite);
}