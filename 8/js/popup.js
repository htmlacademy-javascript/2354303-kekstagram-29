/**
 * @param {Element} popup
 */
function showPopup(popup) {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  popup.addEventListener('click', onPopupClick);

  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

/**
 * @param {Element} popup
 */
function hidePopup(popup) {
  popup.classList.add('hidden');
  popup.removeEventListener('click', onPopupClick);

  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

/**
 * @param {MouseEvent & {target: Element, currentTarget: Element}} event
 */
function onPopupClick(event) {
  if (event.target.closest('.cancel')) {
    hidePopup(event.currentTarget);
  }
}

/**
 * @param {KeyboardEvent} event
 */
function onDocumentKeydown(event) {
  if (event.key.startsWith('Esc')) {
    hidePopup(document.querySelector('.overlay:not(.hidden)'));
  }
}

export {
  showPopup,
  hidePopup,
};
