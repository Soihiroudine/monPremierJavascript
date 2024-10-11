// Travail sur les conditions

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

// Travail sur les notes

/*  Si la note est 5, on affiche insuffisant
    Si la note est 10, on affiche moyen
    Si la note est 12, on affiche assez-bien
    Si la note est 15, on affiche bien
    Si la note est 18, on affiche très bien
*/


let note = prompt("La note : ");

if(note == 5) {
    alert("Insufisant");
} 
if (note == 10) {
    alert("moyen");
}

if (note == 12) {
    alert("Assez-bien");
}

if (note == 15) {
    alert("Bien");
}

if (note == 18){
    alert("Très bien");
}