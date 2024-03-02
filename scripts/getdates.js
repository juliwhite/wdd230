
// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// last modified property 
let lastModif = document.lastModified;
document.querySelector('#lastModified').textContent = lastModif;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.nav-list')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

/**
 * Using localStorage Week 7
 */

const visitsDisplay = document.querySelector(".visits");

// Get the stored VALUE	for the numVisitsLs KEY in localStorage if it exits. if the numVisits KEY is missing, then assign 0 to the numVisists variable.
let numVisists = Number(window.localStorage.getItem("numVisistsLs")) || 0;

// Determine if this is the first visit or display the number of visits. 
if (numVisists !== 0) {
	visitsDisplay.textContent = numVisists;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// Increment the number of visits by one.
numVisists++;


// Store the new visit total into localStorage, key = numVisitsLs
localStorage.setItem("numVisistsLs", numVisists);

// View localStorage data using the Application panel in the browser's DevTools. 

