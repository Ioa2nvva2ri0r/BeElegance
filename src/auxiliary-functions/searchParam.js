export default function searchParam(path, value, initial) {
  const search = new URLSearchParams(decodeURI(path)).get(value);
  return search !== null ? search : initial;
}
