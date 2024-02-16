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

/**************************
 * Add dark mode. 
 * ************************/ 
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
body.classList.toggle('dark-mode');
main.classList.toggle('dark-mode');

});

/*********************************************
 * Calculate the Wind Chill Temperature W06
 *********************************************/

let speed = 15;
let temp = 40;

let feelTemp = document.getElementById('feeltemp');
feelTemp.textContent = windChill(speed, temp);


function windChill(speed, temp) {

	// Compute the windchill
	let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

	// Round the answer down to integer
	wc = Math.floor(wc);

	//if chill is greater than temp, return the temperature. 
	wc = (wc > temp) ? temp : wc;

	return wc;
	

}