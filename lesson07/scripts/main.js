// Declare three const variables that hold references to the 'input', 'button', and 'list' elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//Create a click event for the Add Chapter button using addEventListener.
/*button.addEventListener('click', () => {
    if (input.value != '') {
        //this.classList.add('error');
        input.focus();
    }
    else {
        this.classList.remove('error');
    }

    // Create an element li
    const li = document.createElement('li');

    // Create a delete button 
    const deleteButton = document.createElement('button');

    //Populate the li element textContent or innerHTML with the input value.
    li.textContent = input.value;

    // Populate the button textContent with 'X'.
    deleteButton.textContent = '❌';

    // Append the li element with the delete button.
    li.append(deleteButton);

    // Append the li element to the unordered list in HTML.
    list.append(li);

    // Add and event listener to the delete button that removes the li element when click. 
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });

    // Send the focus to the input element.
    input.focus();

    // Change the input value to nothing or the empty string to clean up the interface for the user. 
    input.value = '';
})*/

/**
 Web Storage API - localStorage.
 Week 7 - Use localStorage to store the BOM list for the user. 
 */

let bom_array = getBomList() || [];

// Populate the display list of chapter of Book of Mormom. 
bom_array.forEach(chapter => {
    display_list(chapter);
});

// Change de button click event in line 7. 
button.addEventListener('click', () => {
    if (input.value != '') {          // make sure the input is not empty.
        display_list(input.value);    // call the function that outputs the submitted chapter.
        bom_array.push(input.value);  // add the chapter to the array
        setBomList();                 // update the localStorage with the new array
        input.value = '',             // clear the input
        input.focus();                // set the focus back to the input. 
    }
});

// Create a function display_list with one parameter (item)
function display_list(item) {
    let li = document.createElement('li');
    let delete_button = document.createElement('button');

    li.textContent = item;        
    delete_button.textContent = '❌';
    delete_button.classList.add('delete');
    li.append(delete_button);
    list.append(li);
    delete_button.addEventListener('click',() => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setBomList() {
    localStorage.setItem('data', JSON.stringify(bom_array));
}

// Define get function to get the local storage item. No parameter ir needed. this function returns to an awaiting array. JSON.parse will be used. 
function getBomList() {
    return JSON.parse(localStorage.getItem('data'));
}

/**
 * The delete function with a parameter named chapter does 3 things:
 * - reformat the chapter to ger rid of 'X' that is passed on the end of the 
 * chapter string when the delete function is called. string.slice() extract the 
 * last character. 
 * - redefine the bom_array using the array.filter method to return everything
 * except the chapter to be removed.
 * - Call the setBomList function to update the localStorage.
 */

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    bom_array = bom_array.filter(item => item !== chapter);
    setBomList();
}