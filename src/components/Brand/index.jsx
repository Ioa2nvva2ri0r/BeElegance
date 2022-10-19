/* eslint-disable no-undef */
import React from 'react';
// Router
import { Link } from 'react-router-dom';
// Components
import Picture from '../common/Picture';
import Desc from '../common/Desc';
// Styles
import brand from './brand.module.scss';

const Brand = () => {
  // .env
  const env = process.env;

  return (
    <div className={brand.main}>
      <div className={brand.box}>
        <Picture
          name="brand-image-1"
          src={env.REACT_APP__IMG_BRAND1}
          cssModule={brand}
        />
        <div className={brand.content}>
          <Desc
            prop={{
              title: 'Идея и женщина',
              paragraph1:
                'Be|Elegance была основана в 2012-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Be|Elegance остаётся семейной компанией, хотя ни один из членов семьи не является модельером.',
              paragraph2:
                'Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.',
            }}
            cssClasses={{
              cssClassTitle: [brand.title],
              cssClassText: [brand.desc],
            }}
          />
        </div>
      </div>
      <div className={brand.box}>
        <div className={brand.content}>
          <Desc
            prop={{
              title: 'Магия в деталях',
              paragraph1:
                'Первый магазин Be|Elegance был открыт в маленьком городке на севере страны в 2012-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.',
              paragraph2:
                'Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.',
            }}
            cssClasses={{
              cssClassTitle: [brand.title],
              cssClassText: [brand.desc],
            }}
          />
        </div>
        <Picture
          name="brand-image-2"
          src={env.REACT_APP__IMG_BRAND2}
          cssModule={brand}
        />
      </div>
      <Link to={`${env.REACT_APP__PATH_SEARCH}score`} className={brand.btn}>
        Перейти в магазин
      </Link>
    </div>
  );
};

export default Brand;
