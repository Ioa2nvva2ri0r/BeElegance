/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { clothesDataAPI } from '../../../redux/slices/getDataClothesSlice';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Check Types
import PropTypes from 'prop-types';
// Components
import IconClose from '../Icon/IconClose';
// Styles
import nav from './nav.module.scss';

const Nav = ({ screenWidth, btnOpen, close, funClose, cssModule = {} }) => {
  // .env
  const env = process.env;
  // Redux
  const dispatch = useDispatch();
  // React Ref
  const navRef = useRef();

  const closeMenu = () => {
    navRef.current && navRef.current.classList.add(cssModule.nav__close);
    setTimeout(() => {
      funClose(!close);
    }, 395);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!navRef.current.contains(e.target) && !btnOpen.contains(e.target))
        return closeMenu();
    };

    if (btnOpen && navRef.current && screenWidth <= 1060)
      document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={arrayStringToString([nav.main, cssModule.nav])}
    >
      <ul className={arrayStringToString([nav.list, cssModule.nav__list])}>
        {[
          { path: '/', desc: 'Главная' },
          { path: 'score', desc: 'Магазин' },
          { path: 'brand', desc: 'О бренде' },
          { path: 'contact', desc: 'Контакты' },
        ].map(({ path, desc }, index) => (
          <li
            key={`nav-link-${index + 1}`}
            className={arrayStringToString([nav.item, cssModule.nav__item])}
          >
            <Link
              to={desc !== 'Главная' ? env.REACT_APP__PATH_SEARCH + path : path}
              className={arrayStringToString([
                nav.link,
                nav.link__nav,
                cssModule.nav__link,
              ])}
              onClick={() => {
                desc === 'Главная' &&
                  window.scroll({
                    top: 0,
                    behavior: 'smooth',
                  });
                (desc === 'Главная' || desc === 'Магазин') &&
                  dispatch(clothesDataAPI());
                screenWidth <= 1060 && closeMenu();
              }}
            >
              {desc}
            </Link>
          </li>
        ))}
      </ul>
      {screenWidth <= 1060 && (
        <button
          className={nav.btn__close}
          aria-label="Закрыть меню"
          onClick={() => closeMenu()}
        >
          <IconClose />
        </button>
      )}
    </nav>
  );
};

Nav.propTypes = {
  screenWidth: PropTypes.number,
  btnOpen: PropTypes.any,
  close: PropTypes.bool,
  funClose: PropTypes.func,
  cssModule: PropTypes.object,
};

export default Nav;
