/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
// Router
import { Link, useLocation } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setPages } from '../../redux/slices/cardLimitSlice';
// Auxiliary Functions
import searchParam from '../../auxiliary-functions/searchParam';
import smoothScroll from '../../auxiliary-functions/smoothScroll';
import { arrayStringToString } from '../../auxiliary-functions/сonvert';
// Components
import Skeleton from '../common/Skeleton';
import Card from '../common/ProductCard';
import Pages from './Pages';
// Styles
import score from './score.module.scss';

const Score = () => {
  function dataFilter(data, category) {
    return data
      ? data.filter((obj) =>
          category === 'Все' ? obj : obj.category === category
        )
      : [];
  }
  // .env
  const env = process.env;
  // Redux
  const dispatch = useDispatch();
  const { activePage, limit } = useSelector((state) => state.cardLimit);
  const activeCategory = searchParam(useLocation().search, 'category', 'Все');
  const loading = useSelector((state) => state.clothesAPI.loading);
  const clothes = useSelector((state) =>
    state.clothesAPI.data !== null ? state.clothesAPI.data : {}
  );
  // React Ref
  const listRef = useRef();
  // React Effect
  useEffect(() => {
    listRef.current && smoothScroll('#score-list', 0);
  }, [activeCategory]);
  useEffect(() => {
    dispatch(setPages(dataFilter(clothes.data, activeCategory).length));
  }, [loading, activeCategory]);

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
                  onClick={() => dispatch(setPage(1))}
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
          ? limit.array
          : dataFilter(clothes.data, activeCategory).slice(
              activePage === 1 ? 0 : limit.card * (activePage - 1),
              limit.card * activePage
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
      <Pages category={activeCategory} />
    </>
  );
};

export default Score;
