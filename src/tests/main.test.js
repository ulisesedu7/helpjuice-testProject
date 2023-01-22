// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import AddNewElement from '../js/modules/add-new-h1.js';
import TransformElement from '../js/modules/transform-element.js';

describe('The main page', () => {
  const mainPage = document.createElement('main');
  AddNewElement.createInput(mainPage);
  const input = mainPage.firstChild;

  it('to have the main input to add content', () => {
    expect(input).toBeTruthy();
  });

  it('to add the dropdown menu when the / is typed', () => {
    AddNewElement.displayOptions(mainPage);
    const dropdown = mainPage.querySelector('.dropdown');

    expect(dropdown).toBeTruthy();
  });

  it('to transform the input to add H1s when called to', () => {
    TransformElement.transformInput(input);
    const h1Input = mainPage.querySelector('.transformed-h1');

    expect(h1Input).toBeTruthy();
  });

  it('to add the h1 with the respective value', () => {
    input.value = 'Test';
    TransformElement.addTransformedElement(mainPage, input);

    const h1Element = mainPage.querySelector('.new-h1');

    expect(h1Element).toBeTruthy();
  });
});
