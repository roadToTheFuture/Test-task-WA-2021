import { createDomElement } from '@js/utils/createDomElement';
import { saveTagIdInStorage, getTagIdFromStorage } from '@/core/services/localStorage';

export default class Tag {
  deleteTag(element) {
    const dataId = Number(element.dataset.id);
    const arrayOfTags = getTagIdFromStorage();
    const updateArray = arrayOfTags.filter((item) => item.id !== dataId);

    saveTagIdInStorage(updateArray);
    element.remove();
  }

  initTagsAreaHandler(tag) {
    tag.addEventListener('click', (event) => {
      const currentElement = event.target;
      const readoly = tag.classList.contains('readonly');

      if (currentElement.closest('svg') && !readoly) {
        this.deleteTag(tag);
      }
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
