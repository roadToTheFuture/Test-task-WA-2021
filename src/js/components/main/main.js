import { createDomElement } from '@js/utils/createDomElement.js';
import Generator from '../generator/generator';

export default class Main {
  constructor() {
    this.generator = new Generator();
  }

  render() {
    const main = createDomElement('main');

    main.append(this.generator.render());
    return main;
  }
}
