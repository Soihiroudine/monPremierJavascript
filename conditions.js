// ------- Travail sur les conditions -------

/**
 * la condition s'applique si elle est vrai
 * 
 * SI <condition> alors
 *      affiche le resulthat
 */

/** 
 * Mot clé utiliser pour créer une condition en javascript : if()
 * **/
// let age = prompt("Votre age : ");
// age = Number(age);


// if (age >= 18) {
//     alert("Notre personnage est majeur ! Tu as " + age + " ans.");
// }//else { alert("il est mineur"); }

// if(age < 18) {
//     alert("Tu es mineur ! Tu as " + age + " ans.")
// }

// ------- Travail sur les notes -------

/*  Si la note est 5, on affiche insuffisant
    Si la note est 10, on affiche moyen
    Si la note est 12, on affiche assez-bien
    Si la note est 15, on affiche bien
    Si la note est 18, on affiche très bien
*/

// if(note < 8) {
//     console.log("Insufisant");
// } else if (note >= 10 && note < 12) {
//     console.log("moyen");
// } else if (note >= 12 && note < 15) {
//     console.log("Assez-bien");
// } else if (note >= 15 && note < 18) {
//     console.log("Bien");
// } else {
//     console.log("Très bien");
// }

// let bac = true;
let laNote = 20;

if (laNote > 10) {
    console.log("Bravos, Vous etes admis !");
} else {
    console.log("Désoler vous nous ne pouvons pas vous prendre !");
}