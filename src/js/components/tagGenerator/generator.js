import { createDomElement } from '@js/utils/createDomElement.js';
import Form from './components/form';
import TagsArea from './components/tagsArea';

export default class Generator {
  constructor() {
    this.area = new TagsArea();
    this.form = new Form();
  }

  render() {
    const generator = createDomElement('div', 'generator', '', '');

    generator.append(this.form.render());
    generator.append(this.area.render());
    return generator;
  }
}
