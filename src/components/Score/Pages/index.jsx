/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../redux/slices/cardLimitSlice';
// Check Types
import PropTypes from 'prop-types';
// Swiper-Slider
import { SwiperSlide } from 'swiper/react';
// Auxiliary Functions
import smoothScroll from '../../../auxiliary-functions/smoothScroll';
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Components
import Slider from '../../common/Slider';
// Styles
import styles from './pages.module.scss';

const Pages = ({ category }) => {
  // .env
  const env = process.env;
  // Redux
  const dispatch = useDispatch();
  const { activePage, pages } = useSelector((state) => state.cardLimit);

  const linkPage = (page) => (
    <Link
      to={`${env.REACT_APP__PATH_SEARCH}score${env.REACT_APP__PATH_CATEGORY}${category}#${page}`}
      className={arrayStringToString([
        styles.link,
        activePage === page && styles.link__active,
      ])}
      onClick={() => {
        dispatch(setPage(page));
        smoothScroll('#score-list', 0);
      }}
    >
      {page}
    </Link>
  );

  return (
    pages.length > 1 &&
    (pages.length <= 3 ? (
      <ul className={styles.list}>
        {pages.map((page) => (
          <li className={styles.item} key={`page-${page}`}>
            {linkPage(page)}
          </li>
        ))}
      </ul>
    ) : (
      <div className={styles.slider__container}>
        <Slider
          option={{
            navigation: {
              prevEl: '.swiper__page_btn-prev',
              nextEl: '.swiper__page_btn-next',
            },
            initialSlide: activePage,
            slidesPerView: 4,
            spaceBetween: 15,
            slidesPerGroup: 4,
          }}
          additionalСssClass={[styles.slider]}
          content={pages.map((page) => (
            <SwiperSlide className={styles.item} key={`page-${page}`}>
              {linkPage(page)}
            </SwiperSlide>
          ))}
        />
      </div>
    ))
  );
};

Pages.propTypes = {
  pages: PropTypes.array,
  activePage: PropTypes.number,
  category: PropTypes.string,
  funSwitchPage: PropTypes.func,
};

export default Pages;
