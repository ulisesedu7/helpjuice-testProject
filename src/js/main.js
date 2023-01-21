/*
  All my imports
*/
import AddNewElement from './modules/add-new-h1.js';
import '../assets/styles/style.scss';

// Declare main consts
const mainApp = document.getElementById('app');

// Add the new input as soon as app starts
AddNewElement.createInput(mainApp);

// Event listener at the app for the new input
mainApp.addEventListener('keypress', (e) => {
  // Display menu when the '/' key is pressed
  if (e.key === '/') {
    console.log(e.target);
    AddNewElement.displayOptions(e.target.parentElement);
  }
});
