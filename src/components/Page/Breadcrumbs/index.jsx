/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { clothesDataAPI } from '../../../redux/slices/getDataClothesSlice';
// Check Types
import PropTypes from 'prop-types';
// Components
import Skeleton from '../../common/Skeleton';
// Styles
import breadcrumbs from './breadcrumbs.module.scss';

const Breadcrumbs = ({ path, title, loading, product }) => {
  // .env
  const env = process.env;
  // Redux
  const dispatch = useDispatch();

  const link = (path, desc, funClick) => (
    <Link to={path} className={breadcrumbs.path} onClick={funClick}>
      {desc}
    </Link>
  );

  return (
    <nav className={breadcrumbs.nav}>
      <ul className={breadcrumbs.nav__list}>
        {loading && path === 'product' ? (
          [...new Array(3)].map((el, index) => (
            <li
              key={`breadcrumbs-${index + 1}`}
              className={breadcrumbs.nav__item}
            >
              <Skeleton
                option={{
                  width: 68,
                  height: 24,
                }}
                content={
                  <rect x="0" y="0" rx="5" ry="5" width="68" height="24" />
                }
              />
            </li>
          ))
        ) : (
          <>
            <li className={breadcrumbs.nav__item}>
              {link('/', 'Главная', () => {
                dispatch(clothesDataAPI());
                window.scroll({
                  top: 0,
                  behavior: 'smooth',
                });
              })}
            </li>
            {path === 'product' && product && (
              <li className={breadcrumbs.nav__item}>
                {link(
                  `${env.REACT_APP__PATH_SEARCH}score${env.REACT_APP__PATH_CATEGORY}${product.category}`,
                  product.category,
                  () => dispatch(clothesDataAPI())
                )}
              </li>
            )}
            <li className={breadcrumbs.nav__item}>
              {link(
                `${env.REACT_APP__PATH_SEARCH}${path}${
                  path === 'product' && product
                    ? `${env.REACT_APP__PATH_PRODUCT}${encodeURI(product.id)}`
                    : ''
                }`,
                title ? title : product.name
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  loading: PropTypes.bool,
  product: PropTypes.object,
};

export default Breadcrumbs;
