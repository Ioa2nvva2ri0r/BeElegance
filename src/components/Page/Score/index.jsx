/* eslint-disable no-undef */
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Auxiliary Functions
import searchParam from '../../../auxiliary-functions/searchParam';
import smoothScroll from '../../../auxiliary-functions/smoothScroll';
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Components
import Skeleton from '../../common/Skeleton';
import Card from '../../common/ProductCard';
import NumPages from './NumPages';
// Styles
import score from './score.module.scss';

const Score = () => {
  const limit = (screen) => (screen >= 1075 ? 6 : screen >= 760 ? 4 : 2);
  const dataFilter = (data, category) =>
    data
      ? data.filter((obj) =>
          category === 'Все' ? obj : obj.category === category
        )
      : [];
  // .env
  const env = process.env;
  // Router
  const activePage = Number(
    useLocation().hash !== '' ? useLocation().hash.slice(1) : 1
  );
  // Redux
  const activeCategory = searchParam(useLocation().search, 'category', 'Все');
  const loading = useSelector((state) => state.clothesAPI.loading);
  const clothes = useSelector((state) =>
    state.clothesAPI.data !== null ? state.clothesAPI.data : {}
  );
  // React State
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardLimit, setCardLimit] = useState(limit(window.innerWidth));
  const [pages, setPages] = useState([]);
  // React Ref
  const listRef = useRef();
  // React LayoutEffect
  useLayoutEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, []);
  // React Effect
  useEffect(() => {
    listRef.current && smoothScroll('#score-list', 0);
  }, [activeCategory]);
  useEffect(() => {
    setCardLimit(limit(screenWidth));
    setPages(
      Array.from(
        {
          length: Math.ceil(
            dataFilter(clothes.data, activeCategory).length / cardLimit
          ),
        },
        (v, i) => i + 1
      )
    );
  }, [screenWidth, loading, activeCategory]);

  return (
    <>
      <ul ref={listRef} id="score-list" className={score.list__categories}>
        {(loading ? [...new Array(5)] : ['Все', ...clothes.categories]).map(
          (category, index) => (
            <li
              key={`category-btn-${index + 1}`}
              className={score.item__categories}
            >
              {loading ? (
                <Skeleton
                  option={{
                    width: 192,
                    height: 64,
                    cssClass: score.btn__loading,
                  }}
                  content={
                    <rect x="0" y="0" rx="0" ry="0" width="192" height="64" />
                  }
                />
              ) : (
                <Link
                  to={`${env.REACT_APP__PATH_SEARCH}score${env.REACT_APP__PATH_CATEGORY}${category}`}
                  className={arrayStringToString([
                    score.btn,
                    activeCategory === category && score.btn__active,
                  ])}
                >
                  {category}
                </Link>
              )}
            </li>
          )
        )}
      </ul>
      <ul className={score.list__products}>
        {(loading
          ? [...new Array(cardLimit)]
          : dataFilter(clothes.data, activeCategory).slice(
              activePage === 1 ? 0 : cardLimit * (activePage - 1),
              cardLimit * activePage
            )
        ).map((obj, index) => (
          <li
            key={`category-item-${index + 1}`}
            className={score.item__products}
          >
            <Card {...obj} />
          </li>
        ))}
      </ul>
      <NumPages
        category={activeCategory}
        activePage={activePage}
        pages={pages}
      />
    </>
  );
};

export default Score;
