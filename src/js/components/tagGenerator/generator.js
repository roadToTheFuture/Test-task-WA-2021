/* eslint-disable class-methods-use-this */
import { createDomElement } from '@js/utils/createDomElement.js';

export default class Generator {
  render() {
    const generator = createDomElement('div', 'container', '', '', 'id', 'example');
    createDomElement('input', 'class', '', generator);
    return generator;
  }
}
