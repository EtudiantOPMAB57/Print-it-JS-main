const slides = [{
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

//je récupère ma flèche gauche dans mon HTML
let arrowLeft = document.querySelector(".arrow_left");

//je récupère ma flèche droite dans mon HTML
let arrowRight = document.querySelector(".arrow_right");

//j'affiche ma flèche dans la console
console.log(arrowLeft);

//j'affiche ma flèche dans la console
console.log(arrowRight);

// je crée une variable pour savoir sur quelle slide on se trouve
let currentSlide = 0;

//je crée un event listener sur ma flèche gauche
arrowLeft.addEventListener("click", function() {
    console.log("J'ai cliqué sur la flèche gauche :D");
    currentSlide--;
    if(currentSlide <0){
        currentSlide = slides.length-1;
    }
    let image = slides[currentSlide]["image"];
    let tagLine = slides[currentSlide]["tagLine"];
    console.log(image);
    console.log(tagLine);
    let imageHTML = document.querySelector(".banner-img");
    let taglineHTML = document.querySelector(".tagline");
    imageHTML.setAttribute("src", "./assets/images/slideshow/"+image);
    taglineHTML.innerHTML = tagLine;
});

//je crée un event listener sur ma flèche droite
arrowRight.addEventListener("click", function() {
    console.log("J'ai cliqué sur la flèche droite :D");
    currentSlide++;
    if(currentSlide>slides.length-1){
        currentSlide = 0;
    }
    let image = slides[currentSlide]["image"];
    let tagLine = slides[currentSlide]["tagLine"];
    console.log(image);
    console.log(tagLine);
    let imageHTML = document.querySelector(".banner-img");
    let taglineHTML = document.querySelector(".tagline");
    imageHTML.setAttribute("src", "./assets/images/slideshow/"+image);
    taglineHTML.innerHTML = tagLine;
});




//nous allons compter le nombre d'élements dans la constante slide avec le mot clé length
let nombreSlides = slides.length;

//on affiche le nombre de slides en console avec une concaténation (+) pour que ce soit plus compréhensible
console.log("Mon nombre de slides est " + nombreSlides);


for(let compteur=0;compteur<nombreSlides;compteur=compteur+1){

    //nous allons créer 4 points dans le slider
let nouveauDot = document.createElement("div");

//j'ajoute la class .dot à mes points
nouveauDot.classList.add("dot");

// Récupérer un élément parent existant
let parentElement = document.querySelector(".dots");

// Ajouter le nouvel élément au parent
parentElement.appendChild(nouveauDot);

}