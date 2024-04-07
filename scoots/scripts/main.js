

// Hamburger menu
/*const mainNav = document.querySelector('.mainMenu');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
})*/

function toggleMenu() {
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.classList.toggle('show');
}

// Set current year in footer.
const currDate = new Date();
document.querySelector('#year').textContent = currDate.getFullYear();


// Fetch weather data using OpenWeatherMap API
const apiKey = '46743c701fc291a73f9a2147e8db2a4f'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.46996&lon=-112.04&appid=${apiKey}&units=imperial`;

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        // Display current temperature and humidity
        document.getElementById('current-temp').textContent = `Current Temperature: ${Math.round(data.list[0].main.temp)} °F`;
        document.getElementById('current-humidity').textContent = `Current Humidity: ${data.list[0].main.humidity} %`;

        // Display next day's forecast at 15:00
        const nextDayForecast = data.list.find(item => item.dt_txt.includes('15:00:00'));
        document.getElementById('next-day-temp').textContent = `Temperature at 3:00pm: ${Math.round(nextDayForecast.main.temp)} °F`;
        document.getElementById('next-day-description').textContent = `Weather: ${nextDayForecast.weather[0].main} - ${nextDayForecast.weather[0].description}`;
        document.getElementById('next-day-icon').src = `https://openweathermap.org/img/w/${nextDayForecast.weather[0].icon}.png`;

        //Max temperature from API
        //document.getElementById('high-temp').textContent = ${}
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getWeatherData(); // Call the function to fetch weather data when the page loads

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.46996&lon=-112.04&appid=46743c701fc291a73f9a2147e8db2a4f&units=imperial';


async function getMaxWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            // Display the high temperature message
            document.getElementById('high-temp').textContent = `${Math.round(data.main.temp_max)}`;
            document.getElementById('high-temp-msg').style.display = 'block';
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getMaxWeather();

function closeMessage() {
    document.getElementById('high-temp-msg').style.display = 'none';
}

closeMessage();