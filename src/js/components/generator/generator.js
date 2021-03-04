import { createDomElement } from '@js/utils/createDomElement';
import Form from './components/form/form';
import TagsArea from './components/tagsArea/tagsArea';

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
