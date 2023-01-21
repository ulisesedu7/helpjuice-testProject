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
          <span>Shortcut: type # + space</span>
        </p>
      </div>

      <div class="dropdown__filters__eh1" id="h1-filter">
        <i class="fa-solid fa-text"></i>
        <p>
          Heading 1
          <span>Shortcut: type # + space</span>
        </p>
      </div>
    </div>
    `;

    element.appendChild(optionsMenu);

    element.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        console.log(e.target);
        TransformElement.transformInput(e.target);
        optionsMenu.remove();
      }
    });
  }
}

export default AddNewElement;