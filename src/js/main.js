/*
  All my imports
*/
import AddNewElement from './modules/add-new-h1.js';
import TransformElement from './modules/transform-element.js';
import '../assets/styles/style.scss';

// Declare main consts
const mainApp = document.getElementById('app');

// Add the new input as soon as app starts
AddNewElement.createInput(mainApp);

// Event listener at the app for the new input
mainApp.addEventListener('keydown', (e) => {
  // Display menu when the '/' key is pressed
  if (e.key === '/' && !e.target.classList.contains('transformed-h1')) {
    AddNewElement.displayOptions(e.target.parentElement);
    AddNewElement.transformElement(e.target);
  }

  if (e.key === 'Enter' && e.target.classList.contains('transformed-h1') && e.target.value !== '') {
    // Add new H1 to the page
    TransformElement.addTransformedElement(e.target.parentElement, e.target);

    // Add new input to continue adding elements
    AddNewElement.createInput(mainApp);
  }

  // Add Regular text
  if (e.key === 'Enter' && e.target.value !== '' && e.target.value !== '/1') {
    if (!e.target.classList.contains('transformed-h1')) {
      TransformElement.addRegularText(e.target.parentElement, e.target);

      // Add new input to continue adding elements
      AddNewElement.createInput(mainApp);
    }
  }
});
