export default function randomArray(array, number) {
  let result = new Array(number),
    length = array.length,
    taken = new Array(length);
  if (number > length)
    throw new RangeError(
      'randomArray: the specified number exceeds the length of the array elements!'
    );
  while (number--) {
    const index = Math.floor(Math.random() * length);
    result[number] = array[index in taken ? taken[index] : index];
    taken[index] = --length in taken ? taken[length] : length;
  }
  return result;
}
