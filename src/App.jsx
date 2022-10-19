import React, { useEffect, useRef } from 'react';
// Router
import { Route, Routes, useLocation } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Auxiliary Functions
import searchParam from './auxiliary-functions/searchParam';
import titleSection from './auxiliary-functions/titleSection';
import smoothScroll from './auxiliary-functions/smoothScroll';
import { clothesDataAPI } from './redux/slices/getDataClothesSlice';
// Components
import Header from './components/Header';
import Skeleton from './components/common/Skeleton';
import Hero from './components/Hero';
import Collection from './components/Сollection';
import Important from './components/Important';
import Each from './components/Each';
import Breadcrumbs from './components/Breadcrumbs';
import Product from './components/Product';
import Score from './components/Score';
import Brand from './components/Brand';
import Contacts from './components/Contacts';
import Basket from './components/Basket';
import Order from './components/Order';
import Footer from './components/Footer';
import IconBasket from './components/common/Icon/IconBasket';
// Styles
import section from './section.module.scss';

function App() {
  const checkString = (string, value, returnValue) =>
    string.includes(value) ? returnValue : null;
  // Router
  const location = useLocation().search;
  const path = searchParam(location, 'section', '');
  const productID = searchParam(location, 'id', '');
  const title = titleSection(path);
  // Redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.clothesAPI.loading);
  const product = useSelector((state) => state.clothesAPI.data);
  const localStorage = useSelector((state) =>
    product !== null
      ? state.clothesStorage.data.filter((obj) => obj.id === product.id)[0]
      : undefined
  );
  // React Ref
  const titleRef = useRef();
  // React Effect
  useEffect(() => {
    path !== 'product'
      ? dispatch(clothesDataAPI())
      : dispatch(clothesDataAPI(productID));
  }, [path]);
  useEffect(() => {
    titleRef.current && smoothScroll('#section-title', 100);
  }, [path, titleRef]);

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                {path === '' ? (
                  <>
                    <Hero />
                    <Collection />
                    <Important />
                    <Each />
                  </>
                ) : (
                  <section className={section.main}>
                    <div
                      className={
                        path === 'product'
                          ? section.title__box_product
                          : section.title__box
                      }
                    >
                      <h1
                        ref={titleRef}
                        className={section.title}
                        id="section-title"
                      >
                        {title ? (
                          title
                        ) : loading ? (
                          <Skeleton
                            option={{
                              width: 210,
                              height: 60,
                              cssClass: section.title__loading,
                            }}
                            content={
                              <rect
                                x="0"
                                y="0"
                                rx="5"
                                ry="5"
                                width="210"
                                height="60"
                              />
                            }
                          />
                        ) : (
                          product.name
                        )}
                        {localStorage && <IconBasket />}
                      </h1>
                      <Breadcrumbs />
                    </div>
                    {checkString(path, 'score', <Score />) ||
                      checkString(path, 'product', <Product />) ||
                      checkString(path, 'brand', <Brand />) ||
                      checkString(path, 'contact', <Contacts />) ||
                      checkString(path, 'basket', <Basket />) ||
                      checkString(path, 'order', <Order />)}
                  </section>
                )}
              </main>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
