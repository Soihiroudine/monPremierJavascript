// Exercice : le jeu - Gestion de bibliotheque

/* 
Vous gérez une bibliothèque qui contient 500 livres. 
Vous décidez de faire les opérations suivantes :
- acheter 50 livres de plus ;
- en jeter 10 ;
- racheter 5 des livres jetés 
*/

/* 
1. Créez une variable totalLivres initialisée à 500 et dans laquelle vous
 réaliserez ces opérations une par une, jusqu’à avoir le nombre final de livres.
2. Vérifiez le résultat grâce à l’instruction console.log.
3. Créez une nouvelle variable appelée affichageTotalLivres, en utilisant le
 résultat total précédemment calculé.
4. Affichez cette phrase grâce à l’instruction console.log. 
*/

// let bibliotheque = {
//     achat : 50,
//     jeter : 10,
//     racheter : 5,
//     totalLivres : 500
// };
// bibliotheque.totalLivres += bibliotheque.achat - ( bibliotheque.jeter - bibliotheque.racheter );
// console.log("Il y a " + bibliotheque.totalLivres + " livres au total.");


// Declaration et affectation de nos variables
let totalLivres = 500; // On a un total de 500 livres
let achat = 50; // Achat de 50 livres
let jeter = 10; // On va jeter 10 livres
let racheter = 5; // on va racheter 5 livres
let affichageTotalLivres = "Le nombre total de livres est de "; // un message d'affichage

// Mise en place de nos opération 
totalLivres += achat; 
totalLivres -= jeter;
totalLivres += racheter;

// Affichage de notre reponse
console.log(totalLivres);

console.log(affichageTotalLivres + totalLivres);

