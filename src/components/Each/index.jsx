/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Swiper-Slider
import { SwiperSlide } from 'swiper/react';
// Components
import Slider from '../common/Slider';
import Picture from '../common/Picture';
import Desc from '../common/Desc';
// Styles
import each from './each.module.scss';

const Each = () => {
  // .env
  const env = process.env;

  return (
    <section className={each.main}>
      <h2 className={`${each.title} us-title`}>Команда мечты Be|Elegance</h2>
      <div className={each.container__sliderContent}>
        <div className={each.slider__container}>
          <Slider
            option={{
              navigation: {
                prevEl: '.swiper__each_btn-prev',
                nextEl: '.swiper__each_btn-next',
              },
              loop: true,
              autoplay: {
                delay: 3000,
              },
            }}
            additionalСssClass={[each.slider]}
            content={[
              env.REACT_APP__IMG_EACH1,
              env.REACT_APP__IMG_EACH2,
              env.REACT_APP__IMG_EACH3,
            ].map((path, i) => (
              <SwiperSlide key={`each-slide-${i + 1}`}>
                <Picture
                  name={`each-image-${i + 1}`}
                  src={path}
                  cssModule={each}
                />
              </SwiperSlide>
            ))}
          />
        </div>
        <div className={each.content}>
          <Desc
            prop={{
              title: 'Для каждой',
              paragraph1:
                'Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.',
              paragraph2:
                'Be|Elegance ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.',
            }}
            cssClasses={{
              cssClassTitle: [each.content__title],
              cssClassText: [each.content__desc],
            }}
          />
          <Link
            to={`${env.REACT_APP__PATH_SEARCH}brand`}
            className={each.content__link}
          >
            Подробнее о бренде
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Each;
