/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Components
import Logo from '../common/Logo';
import Tel from '../common/Tel';
import Nav from '../common/Nav';
import IconTel from '../common/Icon/IconTel';
import IconBasket from '../common/Icon/IconBasket';
import IconMenu from '../common/Icon/IconMenu';
// Styles
import header from './header.module.scss';

const Header = () => {
  // .env
  const env = process.env;
  const dataBasket = useSelector((state) => state.clothesStorage.data);

  return (
    <header className={header.main}>
      <Logo />
      <Nav cssModule={header} />
      <div className={header.box__tel}>
        <button className={header.btn__call} aria-label="Заказать звонок">
          <IconTel />
        </button>
        <Tel className={header.link__tel} />
        {dataBasket.length !== 0 ? (
          <Link
            to={`${env.REACT_APP__PATH_SEARCH}basket`}
            className={header.btn__basket}
            aria-label="Корзина"
          >
            <IconBasket />
            <span
              className={header.btn__basket_length}
              role="note"
              aria-label="Количество в закладок в корзине"
            >
              {dataBasket.length}
            </span>
          </Link>
        ) : (
          <button className={header.btn__basket_disabled} aria-label="Корзина">
            <span className={header.btn__basket_disabled__desc} role="note">
              Корзина пуста!
            </span>
            <IconBasket />
          </button>
        )}
        <button className={header.btn__menu} aria-label="Меню">
          <IconMenu />
        </button>
      </div>
    </header>
  );
};

export default Header;
