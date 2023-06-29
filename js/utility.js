import {pickItemFromArray, pickIntegerInRange} from './functions.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Ivan Protanin', 'Maria Horovod','Ksenya Andreeva', 'Olga Grach', 'Lubov Elkina', 'Kadyr Terenko',
  'Anjela Ohopova', 'Anna Izmaylova', 'Dmitry Sergeev', 'Yesaul Prihodko','Snejana Venisik', 'Uriy Krivov'
];

const descriptions = [
  'Я думаю это интересное фото',
  'Лучшая моя фотка',
  'Так себе, но мы старались',
  'Ставьте лайк',
  'Тут должна быть мудрая цитата, но я её не помню',
  'Это был томный день',
  'Абвргвал',
  'Пусть будет тут',
  'Не описать словами',
  'Это должно быть в вашей ленте'
];

const PHOTO_COUNT = 25;
const commentsRange = [0, 30];
const likesRange = [15, 200];
const avatarsRange = [1, 6];

/**
 * @param {number} length
 * @returns {Array<Picture>}
 */
function createPictureArray(length = PHOTO_COUNT) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPicture(start + index));
}

/**
 * @param {number} id
 * @returns {Picture}
 */
function createPicture(id) {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromArray(descriptions);
  const likes = pickIntegerInRange(...likesRange);
  const comments = createPictureCommentArray(pickIntegerInRange(...commentsRange));

  return {id, url, description, likes, comments};
}
/**
 * @param {number} length
 * @returns {Array<PictureComment>}
 */
function createPictureCommentArray(length) {
  const items = new Array(length).fill(1);

  return items.map((start, index) => createPictureComment(start + index));
}

/**
 * @param {number} id
 * @returns {PictureComment}
 */
function createPictureComment(id) {
  const avatar = `img/avatar-${pickIntegerInRange(...avatarsRange)}.svg`;
  const message = pickItemFromArray(MESSAGES);
  const name = pickItemFromArray(NAMES);

  return {id, avatar, message, name};
}

export default createPictureArray;
