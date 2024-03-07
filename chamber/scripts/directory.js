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

const baseURL = "https://juliwhite.github.io/wdd230/";

const url = "https://juliwhite.github.io/wdd230/chamber/data/members.json";

let result = null;

async function getMembers() {
    const response = await fetch(url);

    //check if the fetch was sucessful. 
    if(response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        //console.log(data);
        displayMembers(data);

    }
}

getMembers(url);

const menu = document.querySelector(".menu");

/*function displayMembers(data) {
    result = data;
    console.log("first: ", result)
}*/