function toggleMenu() {
    const mainMenu = document.querySelector('.mainMenu');
    mainMenu.classList.toggle('show');
}

// Set current year in footer.
const currDate = new Date();
document.querySelector('#year').textContent = currDate.getFullYear();