/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { clothesDataAPI } from '../../redux/slices/getDataClothesSlice';
// Auxiliary Functions
import searchParam from '../../auxiliary-functions/searchParam';
import titleSection from '../../auxiliary-functions/titleSection';
// Components
import Skeleton from '../common/Skeleton';
// Styles
import breadcrumbs from './breadcrumbs.module.scss';

const Breadcrumbs = () => {
  // .env
  const env = process.env;
  // Router
  const path = searchParam(useLocation().search, 'section', '');
  const title = titleSection(path);
  // Redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.clothesAPI.loading);
  const product = useSelector((state) => state.clothesAPI.data);

  const link = (path, desc, funClick) => (
    <Link to={path} className={breadcrumbs.path} onClick={funClick}>
      {desc}
    </Link>
  );

  return (
    <nav className={breadcrumbs.nav}>
      <ul className={breadcrumbs.nav__list}>
        {loading && path.includes('product') ? (
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
            {path.includes('product') && product && (
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
                  path.includes('product') && product
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

export default Breadcrumbs;
