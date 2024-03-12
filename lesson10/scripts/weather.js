// select HTML elements in the document.
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=46743c701fc291a73f9a2147e8db2a4f&units=imperial';

// Asyn function

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    tem = Math.round(data.main.temp);
    //currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    currentTemp.innerHTML = `${tem}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/10n.png`;
    let desc = data.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', `weather icon`);
    captionDesc.textContent = `${desc}`;
}