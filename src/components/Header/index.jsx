/* eslint-disable no-undef */
import React, { useRef, useState, useLayoutEffect } from 'react';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../auxiliary-functions/сonvert';
// Components
import Logo from '../common/Logo';
import Tel from '../common/Tel';
import Nav from '../common/Nav';
import IconTel from '../common/Icon/IconTel';
import IconBasket from '../common/Icon/IconBasket';
import IconMenu from '../common/Icon/IconMenu';
// Styles
import header from './header.module.scss';

const Header = ({ funOpenModal }) => {
  // .env
  const env = process.env;
  const dataBasket = useSelector((state) => state.clothesStorage.data);
  // Router
  const path = useLocation().search;
  // React Ref
  const btnMenuRef = useRef();
  // React State
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(screenWidth <= 1061);
  // React LayoutEffect
  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
      setMenu(window.innerWidth <= 1061);
    });
  }, []);

  const addCssClass = path === '' && screenWidth <= 766 && screenWidth >= 550;

  return (
    <header
      className={arrayStringToString([
        header.main,
        addCssClass && header.main__alert,
      ])}
    >
      <Logo />
      {!menu && (
        <Nav
          screenWidth={screenWidth}
          btnOpen={btnMenuRef.current}
          close={menu}
          funClose={setMenu}
          cssModule={header}
        />
      )}
      <div className={header.box__nav}>
        <div className={header.box__tel}>
          <button
            id="order-call"
            className={arrayStringToString([
              header.btn__call,
              addCssClass && header.btn__call_alert,
            ])}
            aria-label="Заказать звонок"
            onClick={() => funOpenModal(true)}
          >
            <IconTel />
          </button>
          <Tel
            className={addCssClass ? header.link__tel_alert : header.link__tel}
          />
        </div>
        <div>
          {dataBasket.length !== 0 ? (
            <Link
              to={`${env.REACT_APP__PATH_SEARCH}basket`}
              className={arrayStringToString([
                header.btn__basket,
                addCssClass && header.btn__basket_alert,
              ])}
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
            <button
              className={arrayStringToString([
                header.btn__basket_disabled,
                addCssClass && header.btn__basket_alert,
              ])}
              aria-label="Корзина"
            >
              <span className={header.btn__basket_disabled__desc} role="note">
                Корзина пуста!
              </span>
              <IconBasket />
            </button>
          )}
          {screenWidth <= 1060 && (
            <button
              ref={btnMenuRef}
              className={arrayStringToString([
                header.btn__menu,
                addCssClass && header.btn__menu_alert,
              ])}
              aria-label="Меню"
              onClick={() => setMenu(!menu)}
            >
              <IconMenu />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  funOpenModal: PropTypes.func,
};

export default Header;
