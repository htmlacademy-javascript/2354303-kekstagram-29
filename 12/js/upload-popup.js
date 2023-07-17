import initEffectSlider from './effect-slider.js';
import { showPopup } from './popup.js';
import initScaleControl from './scale-control.js';


const popup = document.querySelector('.img-upload__overlay');
const preview = popup.querySelector('img');
const scaleControl = initScaleControl(popup.querySelector('.scale'));
const effectSlider = initEffectSlider(popup.querySelector('.effect-level'));
const effectPicker = popup.querySelector('.effects');

/**
 * @param {File} data
 */
function renderPopup(data) {
  //TODO: Подстановка изображения
  void data;

  scaleControl.on('update', onScaleControlUpdate);
  scaleControl.setValue(100);

  effectSlider.on('update', onEffectSliderUpdate);
  effectSlider.setEffect('none');

  effectPicker.addEventListener('change', onEffectPickerChange);

  showPopup(popup);
}

function onScaleControlUpdate() {
  const percent = scaleControl.getValue();
  const ratio = percent / 100;

  preview.style.setProperty('transform', `scale(${ratio})`)
}

function onEffectSliderUpdate() {
  preview.style.setProperty('filter', effectSlider.getCssValue());
}

function onEffectPickerChange(event) {
  effectSlider.setEffect(event.target.getAttribute('value'));
}

export default renderPopup;
