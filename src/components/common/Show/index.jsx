import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Check Types
import PropTypes from 'prop-types';
// Swiper-Slider
import { SwiperSlide } from 'swiper/react';
// Components
import Skeleton from '../Skeleton';
import Picture from '../Picture';
import Slider from '../Slider';
// Styles
import show from './show.module.scss';

const Show = ({ name, src, className }) => {
  // Redux
  const loading = useSelector((state) => state.clothesAPI.loading);

  return (
    <div className={`${show.img__container} ${className.img__container}`}>
      {loading ? (
        <Skeleton
          option={{
            height: 1000,
            viewBox: {
              width: 800,
            },
            cssStyles: { width: '100%' },
            cssClass: className.img_height,
          }}
          content={<rect x="0" y="0" rx="0" ry="0" width="800" height="1000" />}
        />
      ) : (
        <Slider
          option={{
            loop: true,
            allowTouchMove: false,
            effect: 'fade',
            onSwiper: (swiper) => {
              swiper.params.autoplay.delay = 1000;
              swiper.params.autoplay.disableOnInteraction = false;

              swiper.el.addEventListener('mouseenter', () => {
                if (swiper.autoplay) swiper.autoplay.start();
              });
              swiper.el.addEventListener('mouseleave', () => {
                if (swiper.autoplay) {
                  swiper.slideTo(1, 800);
                  swiper.autoplay.stop();
                }
              });
            },
          }}
          content={src.all.map((path, i) => (
            <SwiperSlide
              key={`show-${name}-${i + 1}`}
              className={show.img__slide}
            >
              <Picture
                name={name}
                src={path}
                cssModule={show}
                additionalСssClass={[className.img_height]}
              />
              <span className={show.img__tooltipe}>Быстрый просмотр</span>
            </SwiperSlide>
          ))}
        />
      )}
    </div>
  );
};

Show.propTypes = {
  name: PropTypes.string,
  src: PropTypes.object,
  className: PropTypes.object,
};

export default Show;
