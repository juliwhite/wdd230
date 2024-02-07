// Declare three const variables that hold references to the 'input', 'button', and 'list' elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//Create a click event for the Add Chapter button using addEventListener.
button.addEventListener('click', () => {
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
})