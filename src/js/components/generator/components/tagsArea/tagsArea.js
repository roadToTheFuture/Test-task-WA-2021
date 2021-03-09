import { createDomElement } from '@js/utils/createDomElement';
import { saveTagIdInStorage, getTagIdFromStorage } from '@/core/services/localStorage';
import Tag from '../tag/tag';

export default class TagsArea {
  render() {
    const tag = new Tag();
    const tagsArea = createDomElement('div', 'generator__area', '', '');
    const tagsInArray = getTagIdFromStorage();
    if (tagsInArray) {
      tagsInArray.forEach((item, index) => {
        const newTag = tag.render(item.value);
        newTag.dataset.id = index;
        item.id = index;
        tagsArea.append(newTag);
      });
      saveTagIdInStorage(tagsInArray);
    }
    return tagsArea;
  }
}
