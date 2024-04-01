import React from "react";
import AboutCards from "../aboutCards/AboutCards";
import { svgOne, svgTwo, svgThree } from "../aboutContents/AboutContents";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <section id="about-section">
      <div className="container">
        <h2 className="4">{t('navTwoLink')}</h2>
        <ul className="about__grid">
          <AboutCards key={1} dataAos="200" img={svgOne} title={t('aboutCardOneTitle')} text={t('aboutCardOneParagraph')} />
          <AboutCards key={2} dataAos="600" img={svgTwo} title={t('aboutCardTwoTitle')} text={t('aboutCardTwoParagraph')} />
          <AboutCards key={3} dataAos="1000" img={svgThree} title={t('aboutCardThreeTitle')} text={t('aboutCardThreeParagraph')} />
        </ul>
        <div id="img-mini-section">
          <img src="https://st3.depositphotos.com/4218696/36125/i/450/depositphotos_361254102-stock-photo-outdoor-disinfection-by-cleaning-workers.jpg" />
          <div className="img__section__content">
            <h3>{t('imgMiniSectionTitle')}</h3>
            <p className="paragraph">{t('imgMiniSectionParagraph')}</p>
            <a href="#contact" id="about-btn" className="contact__btn btn">{t('contactBtn')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;