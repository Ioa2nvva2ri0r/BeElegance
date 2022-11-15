/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
// Router
import { Link, useNavigate } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataBasket } from '../../../redux/slices/dataStorageSlice';
import { clothesDataAPI } from '../../../redux/slices/getDataClothesSlice';
// Components
import Cell from './Cell';
import Picture from '../../common/Picture';
import IconClose from '../../common/Icon/IconClose';
import Amount from '../../common/Amount';
import StrongContent from '../../common/StrongContent';
// Styles
import basket from './basket.module.scss';

const Basket = () => {
  // .env
  const env = process.env;
  const coupons = JSON.parse(env.REACT_APP__DISCOUNT);
  // Router
  const navigate = useNavigate();
  // Redux
  const dispatch = useDispatch();
  const data = useSelector((state) => state.clothesStorage.data);
  // Final Price Logic
  const total = data
    .map(({ price, amount }) => price * amount)
    .reduce((prev, curr) => prev + curr, 0);
  const activeCoupon = [...new Set(data.map((obj) => obj.coupon))][0];
  // React State
  const [valueCoupon, setValueCoupon] = useState('');
  const [discount, setDiscount] = useState(
    activeCoupon ? activeCoupon.discount : 0
  );
  const [errCoupon, setErrCoupon] = useState('');
  const [disable, setDisable] = useState(true);
  // React Effect
  useEffect(() => {
    errCoupon !== '' && setTimeout(() => setErrCoupon(''), 2000);
  }, [errCoupon]);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(clothesDataAPI());
      navigate('/');
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [data]);
  // Active coupon
  const onClickBtnCoupon = () => {
    const active = coupons.filter((obj) => obj.coupon === valueCoupon)[0];

    if (active) {
      setDiscount(active.discount);
      dispatch(
        setDataBasket({
          option: {
            key: 'basket-elegance',
            method: 'REWRITE',
            product: Array.from(data).map((obj) => {
              return { ...obj, coupon: active };
            }),
          },
        })
      );
    } else {
      setDisable(true);
      setErrCoupon(`Купона с таким значением "${valueCoupon}" не существует!`);
    }
    setValueCoupon('');
  };

  return (
    <div className={basket.main}>
      <table className={basket.table}>
        <thead className={basket.table__header}>
          <tr className={basket.string__title}>
            {[
              {
                cssClasses: [basket.cell__product],
                title: 'Товар',
              },
              {
                cssClasses: [basket.cell__price],
                title: 'Цена',
              },
              {
                cssClasses: [basket.cell__amount],
                title: 'Количество',
              },
              {
                cssClasses: [basket.cell__total],
                title: 'Всего',
              },
            ].map(({ cssClasses, title }, index) => (
              <Cell
                key={`basket-cell-title-${index + 1}`}
                cssClasses={[...cssClasses]}
                content={<h2 className={basket.table__title}>{title}</h2>}
              />
            ))}
          </tr>
        </thead>
        <tbody className={basket.table__body}>
          {data.map((obj, index) => (
            <tr
              className={basket.string__product}
              key={`basket-product-${index + 1}`}
            >
              {[
                {
                  cssClasses: [basket.cell__product, basket.content],
                  content: (
                    <>
                      <button
                        className={basket.btn__close}
                        onClick={() =>
                          dispatch(
                            setDataBasket({
                              option: {
                                key: 'basket-elegance',
                                method: 'DELETE',
                                product: obj,
                              },
                            })
                          )
                        }
                        aria-label={`Удалить ${obj.category} ${obj.name} из корзины`}
                      >
                        <IconClose />
                      </button>
                      <div className={basket.box__imgTitle}>
                        <Picture
                          src={obj.src}
                          name={obj.name}
                          cssModule={basket}
                        />
                        <h3 className={basket.content__title}>
                          <Link
                            to={`${env.REACT_APP__PATH_SEARCH}product${
                              env.REACT_APP__PATH_PRODUCT
                            }${encodeURI(obj.id)}`}
                            className={basket.link}
                            onClick={() => dispatch(clothesDataAPI())}
                          >
                            <span className={basket.content__title_category}>
                              {`${obj.category} (${obj.size})`}{' '}
                              <span
                                className={basket.content__title_color}
                                role="note"
                                arial-label="Цвет"
                                style={{ backgroundColor: obj.color }}
                              >
                                {obj.color}
                              </span>
                            </span>
                            <span className={basket.content__title_name}>
                              {obj.name}
                            </span>
                          </Link>
                        </h3>
                      </div>
                    </>
                  ),
                },
                {
                  cssClasses: [basket.cell__price],
                  content: `$${obj.price}`,
                },
                {
                  cssClasses: [basket.cell__amount],
                  content: (
                    <Amount
                      value={obj.amount}
                      productID={obj.id}
                      cssClasses={[basket.input__amount]}
                    />
                  ),
                },
                {
                  cssClasses: [basket.cell__total],
                  content: `$${obj.amount * obj.price}`,
                },
              ].map((obj, index) => (
                <Cell key={`basket-cell-product-${index + 1}`} {...obj} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length !== 0 && (
        <>
          <div className={basket.box__discountScore}>
            <div className={basket.box__discount}>
              {errCoupon !== '' && (
                <p className={basket.content__discount_err}>{errCoupon}</p>
              )}
              {activeCoupon ? (
                <p className={basket.content__discount}>
                  Купон <strong>{activeCoupon.coupon}</strong> применён к{' '}
                  {data.length > 1 ? 'данным товарам' : 'данному товару'}!
                </p>
              ) : (
                <>
                  <input
                    className={basket.input__discount}
                    type="text"
                    value={valueCoupon}
                    placeholder="Введите купон"
                    onChange={(e) => {
                      const value = e.target.value;
                      setValueCoupon(value);
                      value !== '' ? setDisable(false) : setDisable(true);
                    }}
                  />
                  <button
                    className={basket.btn__discount}
                    onClick={onClickBtnCoupon}
                    disabled={disable}
                  >
                    Применить купон
                  </button>
                </>
              )}
            </div>
            <Link
              to={`${env.REACT_APP__PATH_SEARCH}score`}
              className={basket.btn__score}
            >
              Обновить корзину
            </Link>
          </div>
          <div className={basket.box__order}>
            <ul className={basket.list__total}>
              {[
                {
                  title: 'Подытог:',
                  desc: `$${total}`,
                },
                {
                  title: 'Скидка:',
                  desc: `${discount}%`,
                },
              ].map(({ title, desc }, index) => (
                <li key={`total-item-${index + 1}`}>
                  <StrongContent
                    title={title}
                    content={desc}
                    cssClassObj={{
                      classNameBox: [basket.content__subtotal],
                      classNameTitle: [basket.content__subtotal_title],
                      classNameContent: [basket.content__subtotal_price],
                    }}
                  />
                </li>
              ))}
            </ul>
            <div className={basket.box__total}>
              <StrongContent
                title="Итого:"
                content={`$${Math.round(total - total * (discount / 100))}`}
                cssClassObj={{
                  classNameBox: [basket.content__total],
                  classNameTitle: [basket.content__total_title],
                  classNameContent: [basket.content__total_price],
                }}
              />
              <Link
                to={`${env.REACT_APP__PATH_SEARCH}order`}
                className={basket.btn__order}
              >
                Оформить заказ
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
