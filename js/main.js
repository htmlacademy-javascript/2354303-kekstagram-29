import initGallery from './gallery.js';
import './upload.js';
import { request } from './utils.js';
import renderStatus from './status.js';

try {
  /**
   * @type {Array<Picture>}
   */
  const data = await request('https://28.javascript.pages.academy/kekstagram/data');

  initGallery(data);

} catch (error) {
  const title = `Ошибка: ${error.message}`;
  const button = 'Закрыть';

  renderStatus('error', {title, button});
}
