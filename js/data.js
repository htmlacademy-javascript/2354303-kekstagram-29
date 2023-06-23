import {getRandomInteger} from './functions.js';

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const PHOTO_COUNT = 25;
const commentsRange = [0, 30];
const likesRange = [15, 200];
const avatarsRange = [1, 6];

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

const DESCRIPTIONS = [
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

export const PHOTOS = [];

const createMessage = () => Array.from({length: getRandomInteger(1,2)}, ()=>getRandomArrayElement(MESSAGES),).join('');

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInteger(...avatarsRange)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createComments = () =>
  // let Comments = [];
  Array.from({length:getRandomInteger(...commentsRange)}, (_,index)=>createComment(index));
  //return Comments;

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(...likesRange),
  comments: createComments()
});

const createPhotos = () => {
  for (let i = 1; i <= PHOTO_COUNT; i++){
    PHOTOS.push(createPhoto(i));
  }
};
createPhotos();

//const createPhotos = () => Array.from({lenght:PHOTO_COUNT}, (_,index)=> addPhoto(index+1));
//const photos = createPhotosreatePhotos(); И тогда ++id
