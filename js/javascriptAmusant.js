// Jeu : javascript, amusant

/* --- enoncé 1 --- */

// let nom = "Pomme";
// let prenom = "DePain";
// let dateNaissance = "13/03/2004";

// /* enoncé 2 */

// console.log(`nom est de type ${typeof nom}`); // type string
// console.log(`prenom est de type ${typeof prenom}`); //type string
// console.log(`date de naissance est de type ${typeof dateNaissance}`); //type string

/* --- enoncé 3 --- */

// let age = prompt('Quel âge avez-vous ?'); 
// console.log(`vous avez ${age} ans!`); 

// une popup apparait pour demander a mettre une valeur
// Qu’est-ce qu’est prompt() ?
// Une methode qui affiche une boîte de dialogue qui demande une valeur

// A quoi sert prompt() ?
// A afficher une boite de dialogue

/* --- enoncé 4 --- */

// let isCodeur = confirm("Etes-vous codeur ?");
// console.log(isCodeur);

// Il nous affiche une boite de dialogue qui nous demande de choisir entre ok ou annuler

// Qu’est-ce qu’est confirm() ?
// une methode qui indique au navigateur d'afficher une boîte de dialogue d'attendre que la personne confirme ou annule la boîte de dialogue.
// clicker (ok == true), (annuler == false) et l'affecte a isCodeur

// A quoi sert-il ?
// Cette methode envoie un boolean en fonction de la reponse de l'utilisateur

/* --- enoncé 5 --- */

// nom = prompt("Nom : ");
// console.log(`Vous etes ${nom}`);

/* --- enoncé 6 --- */

// let hisabu = 2;
// hisabu ++;
// console.log(hisabu);

// Le navigateur nous affiche la valeur de hisabu + 1

// Que signifie hisabu++ ?
// (hisabu++) == (hisabu = hisabu + 1) et affecte la valeur à hisabu

/* --- enoncé 7 --- */

// let hisabu = 2;
// let shikoa = ++hisabu;
// console.log(shikoa);

// let hisabuTest = 2;
// let test = hisabuTest++;
// console.log(test);

// Que constatez-vous sur le navigateur?
// il va nous afficher la valeur de [ shikoa = hisabu + 1 ]

// Que est la différence entre hisabu++ et ++hisabu ?
/*
    La diference est plus visible quand on utilise une variable 
    - let test1 = hisabu++;
       Ici, il va d'abord affecter la valeur de hisabu sans le +1 à test1 et après ajouter le + 1 a hisabu

    - let test2 = ++hisabu;
        Ici, il va d'abord faire le calcul de hisabu + 1, après il va affecter la valeur obtenu a test2
*/

