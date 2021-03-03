import { createDomElement } from '@js/utils/createDomElement.js';
import Tag from './tag';

export default class TagsArea {
  getTags() {
    this.arrayOfTags = JSON.parse(localStorage.getItem('tags'));
    if (!this.arrayOfTags) this.arrayOfTags = [];
    return this.arrayOfTags;
  }

  render() {
    const tag = new Tag();
    const tagsArea = createDomElement('div', 'generator__area', '', '');
    const tagsInArray = this.getTags();
    if (tagsInArray) {
      tagsInArray.forEach((item, index) => {
        const tagAdd = tag.render(item.value);
        tagAdd.dataset.id = index;
        item.id = index;
        tagsArea.append(tagAdd);
      });
      localStorage.setItem('tags', JSON.stringify(tagsInArray));
    }
    return tagsArea;
  }
}
