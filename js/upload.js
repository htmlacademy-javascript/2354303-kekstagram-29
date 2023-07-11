import renderPopup from './upload-popup.js';
import './pristine-validators.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide, true);
form.addEventListener('reset', onFormReset);

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
function onFormChange(event) {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;

    renderPopup(data);
  }
}

  renderPopup();

function onFormHide() {
  form.reset();
}

function onFormReset() {
  pristine.reset();
}
