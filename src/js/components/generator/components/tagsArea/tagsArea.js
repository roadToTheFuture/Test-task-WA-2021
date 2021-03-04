import { createDomElement } from '@js/utils/createDomElement.js';
import { saveDeviceIdInStorage, getDeviceIdFromStorage } from '@/core/services/localStorage';
import Tag from '../tag/tag';

export default class TagsArea {
  render() {
    const tag = new Tag();
    const tagsArea = createDomElement('div', 'generator__area', '', '');
    const tagsInArray = getDeviceIdFromStorage();
    if (tagsInArray) {
      tagsInArray.forEach((item, index) => {
        const newTag = tag.render(item.value);
        newTag.dataset.id = index;
        item.id = index;
        tagsArea.append(newTag);
      });
      saveDeviceIdInStorage(tagsInArray);
    }
    return tagsArea;
  }
}
