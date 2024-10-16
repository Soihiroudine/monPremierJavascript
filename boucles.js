// BOUCLES

/** 
 * while (condition) {
 *    operation
 * }
 * 
*/

// Initialisation de notre compteur ou variable qui va nous permettre de controler notre boucle
let numero = 0;

// while(numero < 9) {
//     // Tant que la valeur de la
//     // variable numero est plus petit que 9
//     // Alors on exécute les opération suivantes
//     console.log("PASSAGE " + numero + " ====" );
//     console. log ("Numero AVANT l'ajout de + 3, Numero est: " + numero);
//     numero = numero + 3;
//     console.log("Numero APRES l'ajout de + 3, Numero est: " + numero);
// }

// BOUCLE FOR
// Cette boucle permet d'avoir une limite que l'on peut acceder 
// for (let compteur = 0; compteur < 3; compteur++) {
//     // Initialisation d'un point de depart
//     // La condition
//     // <compter++> c'est la même chose que <compter += 1> ou <compter = compter + 1>
    
//     // Operation a executer
//     console.log("Le compter : " + compteur);
// }

// Utiliser la boucle for pour manipuler un tableau
// let tableau = ["Edge", "Opera", "Chrome", "Firefox", "Brave", "Safari", "Vivaldi", ];

let tableauEleves = [
    "Fazati", "Dominique Jean", "Kaniza", "Nadhurati", "Ben", "Ben Ikbal",
    "Dalya", "Jasmine", "Akramal", "Faiz", "Faoula", "Kyara", "Dalya",
    "Soihiroudine", "Tatyana", "Said", "Nicia", "Izad", "Ambdil", "Thouaibat"
];

console.log("==== Presentation des Eleves ====");
for(let indice = 0; indice < tableauEleves.length; indice++) {
    console.log("Eleve dans l'indice " + indice + " : " + tableauEleves[indice]);
}

console.log("Il y a " + tableauEleves.length + " eleves.");
