class TransformElement {
  static transformInput(element) {
    element.value = '';
    element.placeholder = 'Heading 1';
    element.classList.add('transformed-h1');
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
}

export default TransformElement;