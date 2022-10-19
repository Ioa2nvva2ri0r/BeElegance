/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { clothesDataAPI } from '../../../redux/slices/getDataClothesSlice';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Check Types
import PropTypes from 'prop-types';
// Styles
import nav from './nav.module.scss';

const Nav = ({ cssModule = {} }) => {
  // .env
  const env = process.env;
  // Redux
  const dispatch = useDispatch();

  return (
    <nav className={arrayStringToString([nav.main, cssModule.nav])}>
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
              }}
            >
              {desc}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  cssModule: PropTypes.object,
};

export default Nav;
