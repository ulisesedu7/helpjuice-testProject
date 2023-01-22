class TransformElement {
  static transformInput(element) {
    element.placeholder = 'Heading 1';
    element.classList.add('transformed-h1');
    element.value = '';
  }

  static addTransformedElement(container, element) {
    const newH1 = document.createElement('h1');
    newH1.classList.add('transformed-h1');
    newH1.classList.add('new-h1');
    newH1.innerText = element.value;

    // Add new H1
    container.appendChild(newH1);

    // Remove previous input
    element.remove();
  }

  static addRegularText(container, element) {
    const regularText = document.createElement('p');
    regularText.classList.add('new-text');
    regularText.innerText = element.value;

    // Add regular text
    container.appendChild(regularText);

    // Remove previous input
    element.remove();
  }
}

export default TransformElement;