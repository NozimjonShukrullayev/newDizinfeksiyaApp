import React from "react";
import AboutCards from "../aboutCards/AboutCards";
import { svgOne, svgTwo, svgThree, textOne, textTwo, textThree } from "../aboutContents/AboutContents";

class About extends React.Component {
  render() {
    return (
      <section id="about-section">
        <div className="container">
          <h2>Ҳақида</h2>
          <ul className="about__grid">
            <AboutCards key={1} img={svgOne} title="Тезда Хизмат Кўрсатиш" text={textOne} />
            <AboutCards key={2} img={svgTwo} title="Йетук Мутаҳасислаpимиз" text={textTwo} />
            <AboutCards key={3} img={svgThree} title="Сизга Мақул Вақтда" text={textThree} />
          </ul>
          <div id="img-mini-section">
            <img src="https://st3.depositphotos.com/4218696/36125/i/450/depositphotos_361254102-stock-photo-outdoor-disinfection-by-cleaning-workers.jpg" />
            <div className="img__section__content">
              <h3>Клапа ва зарарли ҳашорот енди йўқ деб ҳисобланг !!!</h3>
              <p className="paragraph">Бизнинг кўп йиллардан бери ўз фаолиятини олиб келаётган компаниямиз. Мижозларимиз биздан мамнун</p>
              <a href="#contact" id="about-btn" className="contact__btn btn">Богланиш</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;