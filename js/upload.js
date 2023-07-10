import renderPopup from './upload-popup.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

form.addEventListener('change', onFormChange);
form.addEventListener('hide', onFormHide, true);

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
function onFormChange(event) {
  if (event.target.matches('#upload-file')) {
    const [data] = event.target.files;

    renderPopup(data);
  }
}

function onFormHide() {
  form.reset();
}
