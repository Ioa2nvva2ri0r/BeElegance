/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Check Types
import PropTypes from 'prop-types';
// Swiper-Slider
import { SwiperSlide } from 'swiper/react';
// Auxiliary Functions
import smoothScroll from '../../../../auxiliary-functions/smoothScroll';
import { arrayStringToString } from '../../../../auxiliary-functions/сonvert';
// Components
import Slider from '../../../common/Slider';
// Styles
import styles from './pages.module.scss';

const NumPages = ({ category, activePage, pages }) => {
  // .env
  const env = process.env;

  const linkPage = (page) => (
    <Link
      to={`${env.REACT_APP__PATH_SEARCH}score${env.REACT_APP__PATH_CATEGORY}${category}#${page}`}
      className={arrayStringToString([
        styles.link,
        activePage === page && styles.link__active,
      ])}
      onClick={() => smoothScroll('#score-list', 0)}
    >
      {page}
    </Link>
  );

  return (
    pages.length > 1 &&
    (pages.length <= 3 ? (
      <ul className={styles.list}>
        {pages.map((page) => (
          <li className={styles.item} key={`numPage-score-${page}`}>
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
            <SwiperSlide className={styles.item} key={`numPage-score-${page}`}>
              {linkPage(page)}
            </SwiperSlide>
          ))}
        />
      </div>
    ))
  );
};

NumPages.propTypes = {
  category: PropTypes.string,
  activePage: PropTypes.number,
  pages: PropTypes.array,
};

export default NumPages;
