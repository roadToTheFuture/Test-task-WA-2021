import { createDomElement } from '@js/utils/createDomElement.js';
import Tag from '../tag/tag';
import TagsArea from '../tagsArea/tagsArea';

export default class Form {
  constructor() {
    this.tag = new Tag();
    this.tagsArea = new TagsArea();
    this.arrayOfTags = this.tagsArea.getTags();
  }

  readonly() {
    const checkbox = document.querySelector('.generator__form_chbox');
    const input = document.querySelector('.generator__form_text');
    const button = document.querySelector('.generator__form_btn');
    const tags = document.querySelectorAll('.tag');

    if (checkbox.checked) {
      input.disabled = true;
      button.disabled = true;
      tags.forEach((element) => element.classList.add('readonly'));
    } else {
      input.disabled = false;
      button.disabled = false;
      tags.forEach((element) => element.classList.remove('readonly'));
    }
  }

  addNewTag() {
    const area = document.querySelector('.generator__area');
    const tagName = document.querySelector('.generator__form_text');
    const tag = this.tag.render(tagName.value);
    const tagId = {
      id: this.arrayOfTags.length,
      value: tagName.value,
    };

    this.arrayOfTags.push(tagId);
    tag.dataset.id = tagId.id;
    localStorage.setItem('tags', JSON.stringify(this.arrayOfTags));
    area.append(tag);
    tagName.value = '';
  }

  initButtonHandler(button) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this.addNewTag();
    });
  }

  initCheckboxHandler(checkbox) {
    checkbox.addEventListener('input', () => {
      this.readonly();
    });
  }

  render() {
    const form = createDomElement('form', 'generator__form', '', '', 'action', '');
    const input = createDomElement('input', 'generator__form_text', '', form, 'type', 'text');
    const button = createDomElement('button', 'generator__form_btn', 'Add', form);
    const checkbox = createDomElement('input', 'generator__form_chbox', '', form, 'type', 'checkbox');
    createDomElement('span', '', 'readonly', form);

    input.placeholder = 'Add tag name ...';
    this.initButtonHandler(button);
    this.initCheckboxHandler(checkbox);
    return form;
  }
}
