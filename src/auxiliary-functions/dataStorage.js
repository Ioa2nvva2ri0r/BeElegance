export default function dataStorage(
  {
    storage = localStorage,
    key = 'test',
    method = 'GET',
    product = {},
    section = key,
  },
  funMessage
) {
  if (storage === localStorage || storage === sessionStorage) {
    if (typeof key !== 'string')
      throw new SyntaxError('Key value can only be of type "string"!');
    const getItem = () => JSON.parse(storage.getItem(key));
    const setItem = (value) => storage.setItem(key, JSON.stringify(value));
    const getChangeData = (data) => {
      if (method === 'CLEAR') {
        storage.removeItem(key);
        setItem([]);
      } else setItem(data);

      if (funMessage) {
        const convertSection = (value) =>
          value.charAt(0).toUpperCase() + value.slice(1);
        const messageProduct = (action) =>
          funMessage(
            `Товар «${product.name}» ${action} «${convertSection(section)}».`
          );
        const messageProducts = (action) =>
          funMessage(
            `Товары из раздела «${convertSection(section)}» ${action}!`
          );

        method === 'POST'
          ? messageProduct('добавлен в раздел')
          : method === 'REWRITE'
          ? messageProducts('перезаписаны')
          : method === 'PUT'
          ? messageProduct('изменен в разделе')
          : method === 'DELETE'
          ? messageProduct('удалён из раздела')
          : method === 'CLEAR' && messageProducts('очищены');
      }

      return getItem();
    };
    !getItem() && setItem([]);

    let store = getItem();
    const index =
      store.length !== 0 &&
      product instanceof Object &&
      Object.keys(product).length !== 0
        ? store.findIndex(({ id }) => id === product.id)
        : 0;

    switch (method) {
      case 'GET':
        return store;
      case 'POST':
        return getChangeData([...store, product]);
      case 'REWRITE':
        return getChangeData(product);
      case 'PUT': {
        if (index !== -1)
          store.splice(
            index,
            1,
            Object.fromEntries(
              Object.entries(store[index]).map(([key, value]) =>
                product[key] && key !== 'id' && key !== 'name'
                  ? [key, product[key]]
                  : [key, value]
              )
            )
          );
        return getChangeData(store);
      }
      case 'DELETE': {
        index !== -1 && store.splice(index, 1);
        return getChangeData(store);
      }
      case 'CLEAR':
        return getChangeData();
    }
  } else
    throw new SyntaxError(
      'Storage can only be of type "localStorage" or "sessionStorage"!'
    );
}
