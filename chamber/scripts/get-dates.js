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
});