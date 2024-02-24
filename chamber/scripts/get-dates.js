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

/* Count Visits to the page W07*/
const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE	for the numVisitsLs KEY in localStorage if it exits. if the numVisits KEY is missing, then assign 0 to the numVisists variable.
let numVisists = Number(window.localStorage.getItem("numVisistsLs")) || 0;

// Determine if this is the first visit or display the number of visits. 
if (numVisists !== 0) {
	visitsDisplay.textContent = numVisists;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

// Increment the number of visits by one.
numVisists++;

// Store the new visit total into localStorage, key = numVisitsLs
localStorage.setItem("numVisistsLs", numVisists);


/** Calendar W07 */

const current_date = document.querySelector(".current-day");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

// get current day, month and year. 
let date = new Date(), currYear = date.getFullYear(), currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
	let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // first day of the month
	let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // last date of the month
	let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // last day of the month
	let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // last day of the previous month
	let liTag = "";

	for (let i = firstDayofMonth; i > 0; i--) {
		liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
		
	}
	
	for (let i = 1; i <= lastDateofMonth; i++) { // li of all days of current months. 
		let isToday = i === date.getDate() && currMonth === new Date().getMonth && currYear === new Date().getFullYear() ? "active" : "";
		liTag += `<li class="${isToday}">${i}</li>`;  // add active class to li if the current day, month, and year matched. 
		
	}

	for (let i = lastDayofMonth; i < 6; i++) {
		liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
		
	}


	current_date.innerHTML = `${months[currMonth]} ${currYear}`;
	daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => {
	icon.addEventListener("click", () => {

		//If clicked icon is previous icon then decrement current month by 1 else increment it by 1
		currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

		if(currMonth < 0 || currMonth > 11){
			// creating a new date of current year and month and pass it as date value. 
			date = new Date(currYear, currMonth);
			currYear = date.getFullYear();
			currMonth = date.getMonth();
		} else{
			date = new Date();
		}
		renderCalendar();
	})
})