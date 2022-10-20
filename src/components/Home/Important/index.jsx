import React from 'react';
// Components
import IconImportant from '../../common/Icon/IconImportant';
// Styles
import important from './important.module.scss';

const Important = () => {
  return (
    <section className={important.main}>
      <h2 className={`${important.title} us-title`}>Что для нас важно</h2>
      <ul className={important.list}>
        {[
          {
            title: 'Качество',
            desc: 'Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества',
          },
          {
            title: 'Скорость',
            desc: 'Благодаря отлаженной системе в Be|Elegance мы можем отшивать до 20-ти единиц продукции в наших собственных цехах',
          },
          {
            title: 'Ответственность',
            desc: 'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Be|Elegance',
          },
        ].map(({ title, desc }, i) => (
          <li key={`important-item-${i + 1}`}>
            <article className={important.card}>
              <IconImportant title={title} className={important.icon} />
              <h3 className={important.title__card}>{title}</h3>
              <p className={important.desc}>{desc}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Important;
