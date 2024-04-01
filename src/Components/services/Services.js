import React from "react";
import ServicesCards from "../servicesCard/ServicesCard";
import ServicesTypeCards from "../servicesType/ServicesType";
import { imgOne, imgTwo, imgThree } from "../servicesCardContents/ServicesCardContent";
import { useTranslation } from "react-i18next";

// Services-Type contents in variables 
const cardImgOne = `https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg`,
  cardImgTwo = `https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg`,
  cardImgThree = `https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg`,
  cardImgFour = `https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg`,
  cardImgFive = `https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg`;


function Services() {
  const { t } = useTranslation();
  return (
    <section id="services">
      <div className="container">
        <div className="services__content">
          <h2>{t('navThreeLink')}</h2>
          <p>{t('servicesParagraph')}</p>
        </div>
        <ul className="services__list">
          <ServicesCards key={1} img={imgOne} title={t('servicesCardOneTitle')} text={t('servicesCardOneParagraph')} />
          <ServicesCards key={2} img={imgTwo} title={t('servicesCardTwoTitle')} text={t('servicesCardTwoParagraph')} />
          <ServicesCards key={3} img={imgThree} title={t('servicesCardThreeTitle')} text={t('servicesCardThreeParagraph')}  />
        </ul>
        <div id="services-type">
          <h2>{t('servicesTypeTitle')}</h2>
          <ul className="services__type__list">
            <ServicesTypeCards key={1} img={cardImgOne} title={t('servicesTypeCardOneTitle')} text={t('servicesTypeCardOneParagraph')} />
            <ServicesTypeCards key={2} img={cardImgTwo} title={t('servicesTypeCardTwoTitle')} text={t('servicesTypeCardTwoParagraph')} />
            <ServicesTypeCards key={3} img={cardImgThree} title={t('servicesTypeCardThreeTitle')} text={t('servicesTypeCardThreeParagraph')} />
            <ServicesTypeCards key={4} img={cardImgFour} title={t('servicesTypeCardFourTitle')} text={t('servicesTypeCardFourParagraph')} />
            <ServicesTypeCards key={5} img={cardImgFive} title={t('servicesTypeCardFiveTitle')} text={t('servicesTypeCardFiveParagraph')} />
          </ul>
        </div>
        <div id="services-licensia">
          <img src="https://st2.depositphotos.com/3163989/7417/i/950/depositphotos_74177605-stock-photo-composition-of-cleaning-products.jpg" />
          <div className="licensia__content">
            <img src="https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg" />
            <h3>{t('licensiaTitle')}</h3>
            <a href="#contact" id="licensia-btn" className="contact__btn btn">{t('contactBtn')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;