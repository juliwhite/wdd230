// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// last modified property 
let lastModif = document.lastModified;
document.querySelector('#lastModified').textContent = lastModif;

// Hamburger button and close button -small view
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-list');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Add dark mode. 
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
body.classList.toggle('dark-mode');
main.classList.toggle('dark-mode');




/* const header = document.querySelector("header");
const links = document.querySelector("li a");
const footer = document.querySelector("footer");
const seconContainer = document.querySelector(".second-container");
const spotlights = document.querySelector(".spotlights");
const ev = document.querySelector(".event");
const card = document.querySelector(".card");
 */

/* modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")){
		header.style.background = "#000";
		modeButton.textContent = "💡"
	} else {
		header.style.background = "#a8bd0a";
		header.style.color = "#000";
		modeButton.textContent = "🕶️";
	} */
	
	
	
	
	
	/*body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
	seconContainer.classList.toggle('dark-mode');
	spotlights.classList.toggle('dark-mode');
	company.classList.toggle('dark-mode');
	card.classList.toggle('dark-mode');
	ev.classList.toggle('dark-mode');*/
});