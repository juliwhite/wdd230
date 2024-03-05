// Declare a constante variable names url that contains JSON resource provided. 
 
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a constante variable named cards. 
const cards = document.querySelector('#cards');

/**
 * Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
Store the response from the fetch() method in a const variable named "response".
Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
Add a console.table() expression method to check the data response at this point in the console window.
Call the function getProphetData() in the main line of your .js code to test the fetch and response.
 */
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temporary testing of data retreival
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData();

  /**
   * Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
   *  
   */

  const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('fullName'); // fill in the blank
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.fullName} LDS Prophet`); // fill in the blank
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName); //fill in the blank
    card.appendChild(portrait);
    
    cards.appendChild(card);

    });
  }