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

let slideLeftArrow = document.querySelector("#banner .arrow_left")
let slideRightArrow = document.querySelector("#banner .arrow_right")
let slidePictureTitle = document.querySelector(".banner-txt")
let i=0

/* Bullet point du slider */ 

for (let i = 0; i < slides.length; i++){
	let parentBulletPoint = document.querySelector(".dots");
	let addedBulletPoint = document.createElement("span");
	addedBulletPoint.setAttribute("class", "dot");
	parentBulletPoint.appendChild(addedBulletPoint);
}

/* interaction user avec les flèches du caroussel */

	/* flèche de droite */

		let rightArrowEvent = slideRightArrow
		rightArrowEvent.addEventListener ("click", (pointerEvent, event) => {
		i++;
		
		/* boucle du slide*/
		if (i>=4){i=0};
		
		/* scroll des photo du slide */
		let switchImage = document.querySelector(".banner-img")
		switchImage.setAttribute("src", slides[i].image);
		
		/* affichage des textes selon les photo */
		let p = `${slides[i].tagLine}`
		slidePictureTitle.innerHTML = p
	})


	/* flèche de gauche */

		let leftArrowEvent = slideLeftArrow
		leftArrowEvent.addEventListener ("click", (pointerEvent, event) => {
		i--;

		/* boucle du slide*/
		if (i < 0){i=3};

		/* scroll des photo du slide */
		let switchImage = document.querySelector(".banner-img")
		switchImage.setAttribute("src", slides[i].image)

		/* affichage des textes selon les photo */ 
		let p = `${slides[i].tagLine}`
		slidePictureTitle.innerHTML = p
	
	})
