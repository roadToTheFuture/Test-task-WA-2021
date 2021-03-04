import { createDomElement } from '@js/utils/createDomElement.js';
import { saveDeviceIdInStorage, getDeviceIdFromStorage } from '@/core/services/localStorage';

export default class Tag {
  deleteTag(element) {
    const dataId = element.dataset.id;
    const arrayOfTags = getDeviceIdFromStorage();

    arrayOfTags.forEach((item, index) => {
      if (item.id === +dataId) {
        arrayOfTags.splice(index, 1);
      }
    });

    saveDeviceIdInStorage(arrayOfTags);
    element.remove();
  }

  initTagsAreaHandler(tag) {
    tag.addEventListener('click', (event) => {
      const currentElement = event.target;
      const readoly = tag.classList.contains('readonly');

      if (currentElement.closest('svg') && !readoly) this.deleteTag(tag);
    });
  }

  render(value) {
    const tag = createDomElement('div', 'tag');
    createDomElement('p', 'tag__name', `${value}`, tag);
    createDomElement('i', 'tag__icon fas fa-times-circle', '', tag);
    this.initTagsAreaHandler(tag);
    return tag;
  }
}
