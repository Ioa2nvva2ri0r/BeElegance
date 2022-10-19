export default function titleSection(value) {
  return {
    score: 'Магазин',
    brand: 'О бренде',
    contact: 'Контакты',
    basket: 'Корзина',
    order: 'Оформление заказа',
  }[value];
}
