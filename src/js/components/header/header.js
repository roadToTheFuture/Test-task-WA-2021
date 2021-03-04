import { createDomElement } from '@js/utils/createDomElement';
import { TITLE } from '@js/constants/constants';

export default class Header {
  render() {
    const header = createDomElement('header');
    createDomElement('h1', 'title', TITLE, header);
    return header;
  }
}