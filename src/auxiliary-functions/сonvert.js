export function arrayStringToString(array) {
  return array.filter((el) => typeof el === 'string').join(' ');
}
