class TransformElement {
  static transformInput(element) {
    element.value = '';
    element.placeholder = 'Heading 1';
    element.classList.add('transformed-h1');
  }
}

export default TransformElement;