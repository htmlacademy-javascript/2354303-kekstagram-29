import { showPopup } from './popup.js';
import initScaleControl from './scale-control.js';

const popup = document.querySelector('.img-upload__overlay');
const preview = popup.querySelector('img');
const scaleControl = initScaleControl(popup.querySelector('.scale'));

/**
 * @param {File} data
 */
function renderPopup(data) {
  //TODO: Подстановка изображения
  void data;

  scaleControl.on('update', onScaleControlUpdate);
  scaleControl.setValue(100);

  showPopup(popup);
}

function onScaleControlUpdate() {
  const percent = scaleControl.getValue();
  const ratio = percent / 100;

  preview.style.setProperty('transform', `scale(${ratio})`);
}

export default renderPopup;
