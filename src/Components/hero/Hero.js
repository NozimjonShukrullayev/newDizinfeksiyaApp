import React from "react";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <section id="hero-section">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1>{t('heroTitle')}</h1>
            <p className="paragraph">{t('heroParagraph')}</p>
            <img src="https://www.dezinfeksiyatashkent.uz/assets/diz-main-ee209cbc.png" alt="mini main image"></img>
            <a href="#contact" className="contact__btn btn">{t('contactBtn')}</a>
          </div>
          <div className="hero__img">
            <img src="https://frankfurt.apollo.olxcdn.com/v1/files/teta8qc022tu-UZ/image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;