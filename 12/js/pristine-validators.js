addValidator('word-pattern', (value, pattern) => {
  const words = segmentWords(value);
  const regexp = new RegExp(`^${pattern}$`, 'i');

  return words.every((word) => regexp.test(word));
});

addValidator('unique-words', (value) => {
  const words = segmentWords(value.toLowerCase());
  const wordSet = new Set(words);

  return words.length === wordSet.size;
});

addValidator('word-maxlength', (value, limit) => {
  const words = segmentWords(value);
  const maxlength = Number(limit);

  return words.every((word) => word.length <= maxlength);
});

addValidator('max-words', (value, limit) => {
  const words = segmentWords(value);
  const maxlength = Number(limit);

  return words.length <= maxlength;
});

/**
 * @param {string} name
 * @param {(...args: Array<string>) => boolean} validator
 */
function addValidator(name, validator) {
  // @ts-ignore
  Pristine.addValidator(name, validator, null, 1, true);
}

/**
 * @param {string} value
 * @returns {Array<string>}
 */
function segmentWords(value) {
  return value.split(' ').filter(Boolean);
}
