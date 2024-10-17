// Manipulation du dom

// Selectionner un element
document.head // Recupère l'element head

// let header = document.createElement("header");
// let h1 = document.createElement("h1");

// h1.innerHTML = "Mon h1 créer a apartir de javascript";
// header.appendChild(h1);
// document.body.appendChild(header);
// console.log(document.title);

// let ajout = document.createElement("button");
// ajout.innerHTML = "AJOUT";

// let enleve = document.createElement("button");
// enleve.innerHTML = "ENLEVE";

// document.body.appendChild(ajout);
// document.body.appendChild(enleve);

// let n = 0;

// ajout.addEventListener("click", () => {
//     n++;
//     console.log("PLUS 1, maintenant " + n + " .");
// });

// enleve.addEventListener("click", () => {
//     n--;
//     console.log("MOINS 1, maintenant " + n + " .");
// });



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