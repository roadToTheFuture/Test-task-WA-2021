/* eslint-disable class-methods-use-this */
import { createDomElement } from '@js/utils/createDomElement.js';

export default class Header {
  render() {
    const header = createDomElement('header');
    createDomElement('h1', 'title', 'Tag render', header);
    return header;
  }
}
