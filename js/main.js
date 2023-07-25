import initGallery from './gallery.js';
import './upload.js';
import { request } from './utils.js';
import renderStatus from './status.js';

try {
  /**
   * получение данных с сервера
   * @type {Array<Picture>}
   */
  const data = await request('https://28.javascript.pages.academy/kekstagram/data');

  initGallery(data);

//форма вывода ошибки данных с сервера
} catch (error) {
  const title = `Ошибка: ${error.message}`;
  const button = 'Закрыть';

  renderStatus('error', {title, button});
}
