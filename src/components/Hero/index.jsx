/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Swiper-Slider
import { SwiperSlide } from 'swiper/react';
// Components
import Slider from '../common/Slider';
import Picture from '../common/Picture';
import IconSlide from '../common/Icon/IconSlide';
// Styles
import hero from './hero.module.scss';

const Hero = () => {
  // .env
  const env = process.env;

  const img = (i) =>
    i === 0
      ? hero.img__main
      : i === 1
      ? hero.img__left
      : i === 2 && hero.img__right;

  return (
    <section className={hero.container}>
      <div className={hero.main__box}>
        <Slider
          option={{
            pagination: {
              clickable: true,
            },
            spaceBetween: 50,
            loop: true,
            effect: 'coverflow',
            autoplay: { delay: 7000 },
          }}
          additionalСssClass={[hero.main]}
          content={[
            {
              title: 'Новые поступления в этом сезоне',
              desc: 'Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.',
            },
            {
              title: 'Что-то новенькое. Мы заждались тебя.',
              desc: 'Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Be|Elegance!',
            },
            {
              title: 'Включай новый сезон с BE|ELEGANCE',
              desc: 'Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров',
            },
          ].map(({ title, desc }, index) => (
            <SwiperSlide key={`hero-slide-${index + 1}`} className={hero.slide}>
              <div className={hero.content}>
                <h2 className={hero.content__title}>{title}</h2>
                <p className={hero.content__desc}>{desc}</p>
              </div>
            </SwiperSlide>
          ))}
        />
        <Link
          to={`${env.REACT_APP__PATH_SEARCH}score`}
          className={hero.content__btn}
        >
          <span className={hero.content__btn_icon}>
            <IconSlide direction="down" />
          </span>
          <span className={hero.content__btn_desc}>Открыть магазин</span>
        </Link>
      </div>
      <div className={hero.img__container}>
        {[
          env.REACT_APP__IMG_HERO1,
          env.REACT_APP__IMG_HERO2,
          env.REACT_APP__IMG_HERO3,
        ].map((path, index) => (
          <Picture
            key={`hero-image-${index + 1}`}
            name={`hero-image-${index + 1}`}
            src={path}
            cssModule={hero}
            additionalСssClass={[img(index)]}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
