
// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// last modified property 
let lastModif = document.lastModified;
document.querySelector('#lastModified').textContent = lastModif;

// Hamburger button and close button -small view
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-list');

const isHidden = hamButton.style.display === "none";


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

    
});

// Check if the hamButton is currently hidden or visible. 
if (isHidden) {
    // If button is hidden, set aria-hidden attribute to true
    hamButton.setAttribute("aria-hidden", "true");
} else {
    // If button is visible, set aria-label attribute
    hamButton.setAttribute("aria-hidden", "false");
    hamButton.setAttribute("aria-label", "button is visible");
}

// Toggle visibility of the button
hamButton.style.display = isHidden ? "block" : "none";


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
let speed = 3;
let temp = 25;

let feelTemp = document.getElementById("feeltemp");
feelTemp.innerHTML = windChill(speed, temp);


function windChill(speed, temp) {

	// Compute the windchill
	let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

	// Round the answer down to integer
	wc = Math.floor(wc);

	//if chill is greater than temp, return the temperature. 
	wc = (wc > temp) ? temp : wc;

	return wc;
}

/**
 * Chamber Project - Home Page Enhancement - W10
 * Add dynamic content to the chamber project home page.
 * 1-a. current temperature.
 *   b. current weather description.
 *   c. three days temperature forecast
 * 2-Add a banner.
 * * Banner should only appear on Mondays, Tuesdays, and Wednesday. 
 * * Enable the user the ability to close the banner ❌.
 */

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.49&lon=-112.04&appid=46743c701fc291a73f9a2147e8db2a4f&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCurrentWeather(data) {
    let temper = Math.round(data.main.temp);
    currentTemp.innerHTML = `${temper}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon`);
    captionDesc.textContent = `${desc}`;
}


// Add forecast for 3 days only. 

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.49&lon=-112.04&appid=46743c701fc291a73f9a2147e8db2a4f&units=imperial';
        const response = await fetch(urlForecast);
        const data = await response.json();

        const threeDaysForecast = data.list.filter(x => x.dt_txt.includes('15:00:00'));

        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        threeDaysForecast.slice(0, 3).forEach((forecast, index) => {
            const d = new Date(forecast.dt_txt);
            const roundTemp = Math.round(forecast.main.temp); // this round the temperature
            document.getElementById(`dayofweek${index + 1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${index + 1}`).textContent = roundTemp; // Display only two digits
        });
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
    }
});

/* Banner*/
// Get the banner element
const banner = document.getElementById('banner');

// Check if it's Monday, Tuesday, or Wednesday
const today = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
if (today >= 1 && today <= 3) { // Monday (1), Tuesday (2), Wednesday (3)
    banner.style.display = 'block';
}

// Close the banner when the close button is clicked
const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});


/**
 * Week 11
 */

const urlMembers = "https://juliwhite.github.io/wdd230/chamber/data/members.json";


async function getMembers() {
    const response = await fetch(urlMembers);

    //check if the fetch was sucessful. 
    if(response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        //console.log(data);
        displayGoldMembers(data.members); //call displayGoldMembers with members data.

    }
}

// Call teh function to fetch and display gold members
getMembers();



const displayGoldMembers = (members) => {
    const spotlight = document.querySelector(".spotlights");
        members.forEach((member) => {
            if (member.membership === "gold") {
                let memberDiv = document.createElement('div');
                memberDiv.classList.add('company');

                let name = document.createElement('p');
                name.textContent = `${member.name}`;

                let phone = document.createElement('p');
                phone.textContent = `${member.phone}`;

                let website = document.createElement('a');
                website.textContent = 'Website';
                website.href = member.website;
                website.target = '_blank';

                let image = document.createElement('img');
                image.src = member.image;
                image.alt = member.name;

                memberDiv.appendChild(name);
                memberDiv.appendChild(phone);
                memberDiv.appendChild(website);
                memberDiv.appendChild(image);

                spotlight.appendChild(memberDiv);
            }
        });
}

