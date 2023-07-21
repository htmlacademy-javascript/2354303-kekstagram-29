/**
 * @param {Element} target
 * @param {ScaleControlOptions} options
 * @returns {ScaleControl}
 */
function initScaleControl(target, options = {}) {
  const input = target.querySelector('input');
  const [downButton, upButton] = target.querySelectorAll('button');
  const {min = 25, max = 100, step = 25} = options;

  downButton.addEventListener('click', onDownButtonClick);
  upButton.addEventListener('click', onUpButtonClick);

  function onDownButtonClick() {
    setValue(getValue() - step);
  }

  function onUpButtonClick() {
    setValue(getValue() + step);
  }

  /**
   * @returns {number}
   */
  function getValue() {
    return Number.parseFloat(input.getAttribute('value'));
  }

  /**
   * @param {number} percent
   */
  function setValue(percent) {
    percent = Math.max(percent, min);
    percent = Math.min(percent, max);

    input.setAttribute('value', `${percent}%`);
    input.dispatchEvent(new Event('update'));
  }

  /**
   * @param {string} type
   * @param {EventListener} listener
  */
  function on(type, listener) {
    input.addEventListener(type, listener);
  }

  return {getValue, setValue, on};
}


export default initScaleControl;
