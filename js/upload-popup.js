import { showPopup } from './popup.js';

const popup = document.querySelector('.img-upload__overlay');

/**
 * @param {File} data
 */
function renderPopup(data) {
  //TODO: Подстановка изображения
  void data;

  showPopup(popup);
}

export default renderPopup;
