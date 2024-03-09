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

/**
 * Directory Activity Week 9
 */

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
        displayMembers(data.members);

    }
}

getMembers(url);
//getMembers();

const menu = document.querySelector(".menu");

const displayMembers = (members) => {

    members.forEach((member) => {
        let card = document.createElement('section');
        let imagen = document.createElement('img');
        let memberName = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');

        imagen.setAttribute('src', member.image);
        imagen.setAttribute('alt', `Image of member ${member.name}`);
        imagen.setAttribute('loading', 'lazy');
        imagen.setAttribute('width', '400');
        imagen.setAttribute('height', '300');

        memberName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membership.textContent = `Membership Level: ${member.membership}`;

        card.appendChild(imagen);
        card.appendChild(memberName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        menu.appendChild(card);

    });
}

/*function displayMembers(data) {
    result = data;
    console.log("first: ", result)
}*/