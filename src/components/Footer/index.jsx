import React from 'react';
// Components
import Logo from '../common/Logo';
import Nav from '../common/Nav';
import Tel from '../common/Tel';
import Email from '../common/Email';
import IconSocials from '../common/Icon/IconSocials';
// Image
import Visa from '../common/Icon/Visa.svg';
// Styles
import footer from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={footer.main}>
      <div className="container">
        <ul className={footer.list}>
          <li className={footer.item}>
            <Logo />
            <p className={footer.desc}>
              <span>© Все права защищены</span>
              <span>Политика конфиденциальности</span>
              <span>Публичная оферта</span>
            </p>
          </li>
          <li className={footer.item}>
            <Nav cssModule={footer} />
          </li>
          <li className={footer.item}>
            <div className={footer.container__mailTel}>
              <Tel className={footer.link__tel} />
              <Email />
            </div>
            <ul className={footer.social__list}>
              {[
                {
                  name: 'instagram',
                  link: 'https://www.instagram.com/',
                },
                {
                  name: 'facebook',
                  link: 'https://www.facebook.com/',
                },
                {
                  name: 'twitter',
                  link: 'https://twitter.com/?lang=ru',
                },
              ].map(({ name, link }) => (
                <li key={`social-${name}`} className={footer.social__item}>
                  <a
                    href={link}
                    target="blanck"
                    className={footer.social__link}
                    aria-label={name}
                  >
                    <IconSocials social={name} />
                  </a>
                </li>
              ))}
            </ul>
            <img src={Visa} alt="visa-card" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
