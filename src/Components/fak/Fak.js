import React from "react";

class Faq extends React.Component {
    onClickAccardion = (element) => {
    const parentEl = element.target.parentNode;
    if (!parentEl.classList.contains("active")) {
      parentEl.classList.add("active");
    } else {
      parentEl.classList.remove("active");
    }
  };
  render() {
    return (
      <section id="faq-section">
        <div className="container">
          <div className="faq__grid">
            <h2>ФАҚ</h2>
            <ul className="faq__accordion__list">
              <li className="faq__accordion__item active">
                <div className="faq__item__header" onClick={this.onClickAccardion}>
                  <h3>Зараркунандаларни йўқ қилиш қандай амалга оширилади?</h3>
                  <i className='bx bxs-chevron-down'></i>
                </div>
                <div className="faq__item__content">
                  <p>Махсус асбоб-ускуналар ёрдамида инсектитсидлар аерозолли туманга айланади ва девор қоғози, деворлар ва тахта плиталари орасидаги енг кичик бўшлиқларга, кўзга кўринмас ҳашаротлар учун потентсиал 'яшириш жойлари' га киради.</p>
                </div>
              </li>
              <li className="faq__accordion__item active">
                <div className="faq__item__header" onClick={this.onClickAccardion}>
                  <h3>Сиз фойдаланадиган дорилар хавфлими?</h3>
                  <i className='bx bxs-chevron-down'></i>
                </div>
                <div className="faq__item__content">
                  <p>Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли емас. Аммо даволанишдан кейин хонани 40 дақиқа давомида вентилятсия қилиш керак.</p>
                </div>
              </li>
              <li className="faq__accordion__item active">
                <div className="faq__item__header" onClick={this.onClickAccardion}>
                  <h3>Менга уйимни даволанишга тайёрлашнинг қандайдир усули керакми?</h3>
                  <i className='bx bxs-chevron-down'></i>
                </div>
                <div className="faq__item__content">
                  <p>Асосан, идиш-товоқ ва шахсий гигиена воситаларини изолятсия қилишингиз керак. Даволаш пайтида уй ҳайвонлари ҳам изолятсия қилиниши керак. Мебел ёки маиший техникани кўчиришга ҳожат йўқ.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Faq;