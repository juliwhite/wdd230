function toggleMenu() {
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.classList.toggle('show');
}

// Set current year in footer.
const currDate = new Date();
document.querySelector('#year').textContent = currDate.getFullYear();


// Fetch json.
document.addEventListener('DOMContentLoaded', function () {
    loadPrices();
});

const url = "https://juliwhite.github.io/wdd230/scoots/data/pricing.json";

async function loadPrices() {
    try {
        const response = await fetch(url); // Fetch JSON file
        const data = await response.json();
        
        const pricesTable = document.getElementById('prices-table');
        const pricesBody = document.getElementById('prices-body');

        data.forEach(item => {
            const row = pricesBody.insertRow(); // Insert a row

            // Insert cells into the row
            row.insertCell().textContent = item.RentalType;
            row.insertCell().textContent = item.MaxPersons;
            row.insertCell().textContent = item.HalfDay3Hrs.Price;
            row.insertCell().textContent = item.HalfDay3Hrs.FullDayPrice;
            row.insertCell().textContent = item.HalfDayFull.Price;
            row.insertCell().textContent = item.HalfDayFull.FullDayPrice;
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
}

//loadPrices();

const cards = document.querySelector('#cards');

async function getImgages() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
}

getImgages();
