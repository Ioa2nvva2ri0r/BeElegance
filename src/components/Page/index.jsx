/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import smoothScroll from '../../auxiliary-functions/smoothScroll';
// Components
import Skeleton from '../common/Skeleton';
import IconBasket from '../common/Icon/IconBasket';
import Breadcrumbs from './Breadcrumbs';
import Score from './Score';
import Product from './Product';
import Brand from './Brand';
import Contacts from './Contacts';
import Basket from './Basket';
import Order from './Order';
// Styles
import page from './page.module.scss';

const Page = ({ path }) => {
  const checkString = (string, value, element) =>
    string.includes(value) ? element : null;

  const title = JSON.parse(process.env.REACT_APP__SECTION_TITLE)[path];
  // Redux
  const loading = useSelector((state) => state.clothesAPI.loading);
  const product = useSelector((state) => state.clothesAPI.data);
  const productLocalStorage = useSelector((state) =>
    product !== null
      ? state.clothesStorage.data.filter((obj) => obj.id === product.id)[0]
      : undefined
  );
  // React Ref
  const titleRef = useRef();
  useEffect(() => {
    titleRef.current && smoothScroll('#section-title', 100);
  }, [path, titleRef]);

  return (
    <section className={page.main}>
      <div
        className={
          path === 'product' ? page.title__box_product : page.title__box
        }
      >
        <h1 ref={titleRef} className={page.title} id="section-title">
          {title ? (
            title
          ) : loading ? (
            <Skeleton
              option={{
                width: 210,
                height: 60,
                cssClass: page.title__loading,
              }}
              content={
                <rect x="0" y="0" rx="5" ry="5" width="210" height="60" />
              }
            />
          ) : (
            product.name
          )}
          {productLocalStorage && <IconBasket />}
        </h1>
        <Breadcrumbs
          path={path}
          title={title}
          product={product}
          loading={loading}
        />
      </div>
      {checkString(path, 'score', <Score />) ||
        checkString(path, 'product', <Product />) ||
        checkString(path, 'brand', <Brand />) ||
        checkString(path, 'contact', <Contacts />) ||
        checkString(path, 'basket', <Basket />) ||
        checkString(path, 'order', <Order />)}
    </section>
  );
};

Page.propTypes = {
  path: PropTypes.string,
};

export default Page;
