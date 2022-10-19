/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// Auxiliary Functions
import randomArray from '../../auxiliary-functions/randomArray';
// Swiper-Slider
import { SwiperSlide } from 'swiper/react';
// Components
import Slider from '../common/Slider';
import Card from '../common/ProductCard';
// Styles
import collection from './collection.module.scss';

const Collection = () => {
  // .env
  const env = process.env;
  // Redux
  const loading = useSelector((state) => state.clothesAPI.loading);
  const { data } = useSelector((state) =>
    state.clothesAPI.data !== null ? state.clothesAPI.data : []
  );

  return (
    <section className={collection.main}>
      <h2 className={`${collection.title} us-title`}>Новая коллекция</h2>
      <div className={collection.slider__container}>
        <Slider
          option={{
            navigation: {
              prevEl: '.swiper__collection_btn-prev',
              nextEl: '.swiper__collection_btn-next',
            },
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 3,
            breakpoints: {
              1070: {
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              767: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 16,
              },
              100: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                allowTouchMove: true,
              },
            },
          }}
          additionalСssClass={[collection.slider]}
          content={(loading ? [...new Array(3)] : randomArray(data, 5)).map(
            (item, index) => (
              <SwiperSlide key={`collection-slide-${index + 1}`}>
                <Card {...item} />
              </SwiperSlide>
            )
          )}
        />
      </div>
      <Link
        to={`${env.REACT_APP__PATH_SEARCH}score`}
        className={collection.btn}
      >
        Открыть магазин
      </Link>
    </section>
  );
};

export default Collection;
