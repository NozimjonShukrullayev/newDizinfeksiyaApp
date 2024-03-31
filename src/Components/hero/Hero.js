import React from "react";

class Hero extends React.Component {
  render() {
    return (
      <section id="hero-section">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__content">
              <h1>Дизинфексия хизмати</h1>
              <p className="paragraph">Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини олиб борамиз, шунинг учун биринчи марта зараркунандалардан қандай қутулишни биламиз.</p>
              <img src="https://www.dezinfeksiyatashkent.uz/assets/diz-main-ee209cbc.png" alt="mini main image"></img>
              <a href="#contact" className="contact__btn btn">Богланиш</a>
            </div>
            <div className="hero__img">
              <img src="https://frankfurt.apollo.olxcdn.com/v1/files/teta8qc022tu-UZ/image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;