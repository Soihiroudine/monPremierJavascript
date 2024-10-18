// Manipulation du dom

// Selectionner un element

let test = document.querySelector("#pomme");
console.log(test);

let liste = document.querySelectorAll("li");
console.log("notre liste", liste);

let bleu = "#4596AB";
let rouge = "#DA4586";
let vert = "#89BD56";


let para = document.querySelector("#paragraphe1");

let monSpan = document.querySelector("#paragraphe span");

console.log("Le span ", monSpan);

// Modification de notre element du dom

// code de teste : img
let elementImage = document.querySelector("#premiereImage");
elementImage.setAttribute("class", "photoModifiee");

elementImage.setAttribute("alt", "Mon image doit s'afficher");

elementImage.src = "image/cond.png";

// Ajout d'une classe
elementImage.classList.add("nouvelleClasse");

// console.log("ajout nouvelle classe :", elementImage);

// Suppression d'une classe
elementImage.classList.remove("photo");


// Créer un nouvel element dans la page
// use createElement()

let nouveauDiv = document.createElement("div");
let partieH3 = document.createElement("h3");
partieH3.textContent = "Ceci est un texte";
console.log(partieH3);

nouveauDiv.appendChild(partieH3);
let body = document.querySelector("body");
body.appendChild(nouveauDiv);

