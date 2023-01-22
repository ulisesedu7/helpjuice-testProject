// Imports
import TransformElement from './transform-element.js';

class AddNewElement {
  static createInput(container) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.classList.add('main__input');

    newInput.placeholder = 'Type / for blocks, @ to link docs or people';

    container.appendChild(newInput);
  }

  static displayOptions(element) {
    const optionsMenu = document.createElement('div');
    optionsMenu.classList.add('dropdown');

    optionsMenu.innerHTML = `
    <div class="dropdown__content">
      <p class="dropdown__content__title">Add blocks</p>
      <p class="dropdown__content__des">Keep typing to filter, or escape to exit</p>
    </div>

    <div class="dropdown__filters">
      <div class="dropdown__filters__h1" id="h1-filter">
        <i class="fa-solid fa-heading fa-2x"></i>
        <p>
          Heading 1
          <span>Shortcut: type 1 + Enter</span>
        </p>
      </div>
    </div>
    `;

    element.appendChild(optionsMenu);
  }

  static transformElement(element) {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value === '/1') {
        TransformElement.transformInput(e.target);
        e.target.nextElementSibling.remove();
      }

      if (e.key === 'Backspace' && e.target.value === '/') {
        e.target.nextElementSibling.remove();
      }
    });
  }
}

export default AddNewElement;