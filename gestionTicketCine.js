// Jeu

/* 
Vous êtes chargé de la maintenance d’une borne automatique qui permet
de récupérer son billet de cinéma. Vous devez préparer la sortie du
prochain film Koungou, et faire en sorte que les utilisateurs puissent
récupérer un billet pour ce nouveau film.

Un ticket de cinéma a plusieurs propriétés : 
 + un nom de film, 
 + un prix, 
 + un numéro de salle.

Déclarez un objet ticket avec les propriétés suivantes :
 + nomFilm ;
 + prix ;
 + numeroSalle.

Déclarez une variable nom avec votre nom.

Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.
Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur.
Vérifiez le résultat avec un console.log.
*/

// Description du film
let film = {
    nom : "Koungou",
    dure : 90,
    anneeSortie : 2024,
    nationalite : "Français",
    langue : "français"
}

// Creation de notre ticket 
let ticket = {
    nomFilm : film.nom,
    prix : 10,
    numeroSalle : 2
}

// Creation d'un utilisateur
let nom = "Cazers";

// Un exemple d'affichage
console.log("Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle + ".");

// le message de la borne
let texteAffichage = "Bonjour " + nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle + ".";

console.log(texteAffichage);

// On va maintenant vouloir faire en sorte que l'utilisateur puisse avec le navigateur
// Pouvoir afficher 