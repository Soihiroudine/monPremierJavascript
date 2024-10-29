// Apprentissage de classe

// Syntaxe d'une classe
class MyClass {
    // Le constructeur
    constructor( ) { } // Le constructeur de ma classe
    methode1 () {} // Premiere méthode de ma classe
    methode2 () {} // Deuxieme méthode de ma classe
    methode3 () {} // Troisième méthode de ma classe
}

class Utilisateur {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    bienvenu() {
        console.log("Bienvenu à " + this.prenom);
    }
}

let perso = new Utilisateur("Cazers", "Pomme");
console.log(perso.nom);
console.log(perso.prenom);

console.log("Type de perso : " + typeof perso);

perso.bienvenu();