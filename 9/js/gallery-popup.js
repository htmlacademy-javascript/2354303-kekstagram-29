import { showPopup } from './popup.js';

const popup = document.querySelector('.big-picture');
const commentTemplate = popup.querySelector('.social__comment');

/**
 * @type {ReturnType<createCommentsRenderer>}
 */
let renderNextComments;

/**
 * @param {Picture} data
 */
function renderPopup(data) {
  popup.querySelector('.big-picture__img img').setAttribute('src', data.url);
  popup.querySelector('.social__caption').textContent = data.description;
  // popup.querySelector('.social__comments').replaceChildren(...data.comments.map(createComment));
  popup.querySelector('.likes-count').textContent = String(data.likes);

  renderNextComments = createCommentsRenderer(data.comments);
  renderNextComments();
  popup.addEventListener('click', onPopupClick);

  showPopup(popup);
}

/**
 * @param {Array<PictureComment>} data
 * @param {number} step
 * @returns {() => void}
 */
function createCommentsRenderer(data, step = 5) {
  const discussion = popup.querySelector('.social__comments');
  const moreButton = popup.querySelector('.comments-loader');
  const [shownCount, totalCount] = popup.querySelectorAll('.comments-count');
  const commentsTotal = data.length;

  data = structuredClone(data);
  discussion.textContent = '';
  totalCount.textContent = String(commentsTotal);

  return () => {
    discussion.append(...data.splice(0, step).map(createComment));
    moreButton.classList.toggle('hidden', data.length === 0);
    shownCount.textContent = String(commentsTotal - data.length);
  };
}

/**
 *
 * @param {PictureComment} data
 * @returns {HTMLLIElement}
 */
function createComment(data) {
  const comment = /** @type {HTMLLIElement} */ (commentTemplate.cloneNode(true));

  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
}

/**
 * @param {MouseEvent & {target: Element}} event
 */
function onPopupClick(event) {
  if (event.target.closest('.comments-loader')) {
    renderNextComments();
  }
}

export default renderPopup;
