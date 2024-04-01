import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <section id="footer">
      <div className="container">
        <ul className="footer__list">
          <li>
            <a href="#hero-section" className="footer__link">
              <img src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png" className="logo__img" />
            </a>
          </li>
          <li>
            <a href="#hero-section" className="footer__link">
              <i className='bx bxs-map'></i>
              <p>{t('footerLinkParagraph')}</p>
              <i className='bx bx-up-arrow-alt'></i>
            </a>
          </li>
          <li>
            <a href="tel:+998915887008" className="footer__link">
              <i className='bx bx-phone-call'></i>
              <p>+998 91 588 70 08</p>
              <i className='bx bx-up-arrow-alt'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;