const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideRightArrow = document.querySelector("#banner .arrow_right")
let slideLeftArrow = document.querySelector("#banner .arrow_left")
let slideBannerPicture = document.querySelector(".banner-img")
let slideBannerText = document.querySelector(".banner-txt")
let bulletSwitch = document.querySelectorAll(".dot")

index = 0

/* EventListener sur fleche de droite */ 
slideRightArrow.addEventListener ("click", (PointerEvent) => {
	index++;
	/* condition IF boucle fin du slider vers le début */ 
	if (index >= slides.length){index=0;}
	/* switch sur l'image en fonction de l'index qui est augmenter au clic */ 
	slideBannerPicture.setAttribute("src", slides[index].image);
	/* modification du titre et du paragraphe sur le slider en fonction de l'image avec INNERHTML */ 
	let p=`${slides[index].tagLine}`
	slideBannerText.innerHTML = p;
	/* Ajout du bullet point actif et suppression des anciens */ 
	let bulletSwitch = document.querySelectorAll(".dot");
	for (let i = 0; i < bulletSwitch.length; i++) {
    	bulletSwitch[i].classList.remove("dot_selected")};
	bulletSwitch[index].classList.add("dot_selected");
})

/* EventListener sur fleche de gauche */ 
slideLeftArrow.addEventListener ("click", (PointerEvent) => {
	index--;
	/* condition IF boucle début du slider vers la fin */ 
	if (index < 0){index=slides.length-1;}
	/* switch sur l'image en fonction de l'index qui est augmenter au clic */ 
	slideBannerPicture.setAttribute("src", slides[index].image);
	/* modification du titre et du paragraphe sur le slider en fonction de l'image avec INNERHTML */ 
	let p=`${slides[index].tagLine}`
	slideBannerText.innerHTML = p;
	/* Ajout du bullet point actif et suppression des anciens */ 
	for (let i = 0; i < bulletSwitch.length; i++) {
		bulletSwitch[i].classList.remove("dot_selected")}
	bulletSwitch[index].classList.add("dot_selected");
})

/* Ajout des bulletpoint en fonction du nombre d'élement dans slides */ 
for (i = 0; i < slides.length; i++){
	let parentBulletPoint = document.querySelector(".dots");
	let addedBulletPoint = document.createElement("span");
	addedBulletPoint.setAttribute("class", "dot ");
	parentBulletPoint.appendChild(addedBulletPoint);
}
/* selection automatique du premier bullet du slider au chargement de la page */
let bulletInitial = document.querySelectorAll(".dot");
bulletInitial[0].classList.add("dot_selected");