// Javascript amusant (suite)

const date = new Date();

/* --- enoncé 8 --- */

// let annee = prompt('Dans quelle année sommes-nous ?');

// if (annee == date.getFullYear()) {
//     console.log('Vous avez juste!');
// } else {
//     console.log('Vous vous trompez?');
// }

// Que signifie if(){} else {} ?
// Nous avous la declaration de conditions avec les mot-clé if et else
// le if nous permet de verifier si notre condition est vrai ou faux
// Quand c'est faux et si le mot-clé else est present il va entré dans le block pour appliquer le cas contraire de if

/* --- enoncé 9 --- */

let utilisateur = new Object();

// Le code si-dessus, fait la déclaration d'un objet dont son nom est utilisateur
// On a fait l'initialisation de l'object *Object* 

// Dans la console.log, affichez le type de la variable utilisateur?
// console.log(typeof utilisateur); // type objet

let monTableauVille = [
    "Paris",
    "Toulouse",
    "Marseille",
    "Mamoudzou",
    "Dzaoudzi",
    "Acoua",
    "Chirongui"
];

// 
console.log(`le type de monTableauVille : ${typeof monTableauVille}`);

// utilisation de bouccle

console.log("Les nom des villes : ")
for(let i = 0; i < monTableauVille.length; i++) {
    console.log(`${i} : ${monTableauVille[i]}`);
}

const eleve = {
    nom: 'Abdou',
    age: 18,
    notes: [10, 4, 18]
}

console.log("nom : " + eleve.nom);
console.log("note : " + eleve.notes);
console.log("note 1 : " + eleve.notes[1]);
console.log("note : " + eleve['notes']);