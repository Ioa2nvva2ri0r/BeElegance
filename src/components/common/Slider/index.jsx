import React from 'react';
// Check Types
import PropTypes from 'prop-types';
// Auxiliary Functions
import { arrayStringToString } from '../../../auxiliary-functions/сonvert';
// Swiper-Slider
import {
  A11y,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from 'swiper';
import { Swiper } from 'swiper/react';
// Components
import IconSlide from '../Icon/IconSlide';
// Styles
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Styles // Effect
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';

const Slider = ({
  option: {
    pagination,
    navigation,
    initialSlide = 1,
    spaceBetween = 0,
    slidesPerView = 1,
    slidesPerGroup = 1,
    allowTouchMove = false,
    speed = 800,
    loop = false,
    effect,
    autoplay,
    breakpoints,
    onSwiper,
  },
  content,
  additionalСssClass = [],
}) => {
  const optionSwiper = {
    modules: [
      A11y,
      pagination && Pagination,
      navigation && Navigation,
      (autoplay || effect) && Autoplay,
      effect &&
        (effect === 'fade'
          ? EffectFade
          : effect === 'coverflow' && EffectCoverflow),
    ].filter(Boolean),
    ...(pagination && {
      pagination,
    }),
    ...(navigation && {
      navigation,
      a11y: {
        prevSlideMessage: 'Влево',
        nextSlideMessage: 'Вправо',
      },
    }),
    initialSlide,
    spaceBetween,
    slidesPerView,
    slidesPerGroup,
    allowTouchMove,
    speed,
    loop,
    ...(effect && {
      effect,
    }),
    ...(autoplay && {
      autoplay: {
        delay: autoplay.delay,
        disableOnInteraction: false,
      },
    }),
    ...(breakpoints && { breakpoints }),
    ...(onSwiper && { onSwiper }),
  };

  return (
    <>
      {navigation && (
        <button className={`${navigation.prevEl.replace(/[^a-z0-9_-]/gi, '')}`}>
          <IconSlide direction="prev" />
        </button>
      )}
      <Swiper
        {...optionSwiper}
        className={arrayStringToString([...additionalСssClass])}
      >
        {content}
      </Swiper>
      {pagination && pagination.el && (
        <div className={`${pagination.el.replace(/[^a-z0-9_-]/gi, '')}`}></div>
      )}
      {navigation && (
        <button className={`${navigation.nextEl.replace(/[^a-z0-9_-]/gi, '')}`}>
          <IconSlide direction="next" />
        </button>
      )}
    </>
  );
};

Slider.propTypes = {
  option: PropTypes.shape({
    pagination: PropTypes.shape({
      el: PropTypes.string,
      bulletClass: PropTypes.string,
      bulletActiveClass: PropTypes.string,
      clickable: PropTypes.bool,
      type: PropTypes.string,
    }),
    navigation: PropTypes.shape({
      prevEl: PropTypes.string,
      nextEl: PropTypes.string,
    }),
    initialSlide: PropTypes.number,
    spaceBetween: PropTypes.number,
    slidesPerView: PropTypes.number,
    slidesPerGroup: PropTypes.number,
    allowTouchMove: PropTypes.bool,
    speed: PropTypes.number,
    loop: PropTypes.bool,
    effect: PropTypes.string,
    autoplay: PropTypes.shape({
      delay: PropTypes.number,
    }),
    breakpoints: PropTypes.object,
    onSwiper: PropTypes.func,
  }),
  content: PropTypes.array,
  additionalСssClass: PropTypes.array,
};

export default Slider;
