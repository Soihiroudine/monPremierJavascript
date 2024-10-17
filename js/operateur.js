// OPERATEUR dans JAVASCRIPT
// Permettent de réaliser ou d'effectuer des calculs

/**
 *      ADDITION : + 
 *
 * Addition de deux à plusieurs nombres
 * 
 *  = 5+6 ou 96+3
 * 
 *  = -9+5 ou -65 + 4 ...
 * 
 * Concaténation de chaîne de caractère
 * 
 * "pomme" + " delicieuse" = "pomme delicieuse"
 * 
 *  */
let dix = 5 + 5; // result : 10
let deuxMots = "deux" + "trois"; // result : "deuxtrois"


/**
 *      SOUSTRACTION : - 
 * 
 * Permet de faire une soustraction en deux à plusieurs nombre
 * 
 *  */
let quinze = 20 - 5; // result : 15
// console.log(quinze);

let moinsUN = 60 - 61; // result : -1
// console.log(moinsUN);

/**
 *      MULTIPLICATION : *
 * 
 * */
let cent = 50 * 2; // result : 100
// console.log(" 50 * 2 " + cent);


/**
 *      DIVISION : /
 * 
  */

let cinq = 10 / 2; // result : 5
// console.log("10 / 2 = " + cinq);

let testD = 10 / 3;
console.log(testD);

let Dtest = 10.0 / 2.21;
// console.log(Dtest);


/**
 *      RESTE : %
 * 
 * Retourne le reste de la division euclidienne
 * 
 * **/

let reste = 10 % 3;
console.log(reste);

/**
 * 
 *      ASSIGNATION ou AFFECTATION : =
 * 
 * Permet d'affecter un resulthat
*/
let variable = "valeur";

/**
 * 
 *      COMPARARTEUR egal :
 *  == : permet de comparer deux valeurs
 * 
 *  === : permet de comparer deux valeurs et evalue leurs types
 * 
 * Le resulthat attendu est true ou false
 * 
 * exemple : a == b
 *          + si a est égal à b, result true
 *          + Sinon, result false
**/

let comparer = cent == cinq; // 100 = 5 ? result : false
console.log("Est ce que 100 est égal à 5, " + comparer);

let douzeESinple = 12 == "12";
let douzeEDouble = 12 === "12";

console.log("Premier douze : " + douzeESinple); // result : true
console.log("Deuxieme douze : " + douzeEDouble); // result : false

/**
 * 
 *      NEGATION : !
 *      
 *      NON-EGALE : !=
 * 
 * Il va appliquer le contraire
 */

let centDifferentCinq = cent != cinq;
console.log("Est ce que 100 est different de 5, " + centDifferentCinq);