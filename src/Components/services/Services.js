import React from "react";
import ServicesCards from "../servicesCard/ServicesCard";
import ServicesTypeCards from "../servicesType/ServicesType";
import { imgOne, imgTwo, imgThree, textOne, textTwo, textThree } from "../servicesCardContents/ServicesCardContent";


// Services-Type contents in variables 
const cardImgOne = `https://www.dezinfeksiyatashkent.uz/assets/klopi-6c1f42ef.jpg`,
  cardImgTwo = `https://www.dezinfeksiyatashkent.uz/assets/tarakan-d8b430bd.jpg`,
  cardImgThree = `https://www.dezinfeksiyatashkent.uz/assets/skarpion-6902a7a9.jpg`,
  cardImgFour = `https://www.dezinfeksiyatashkent.uz/assets/grizuni-de8c9315.jpg`,
  cardImgFive = `https://www.dezinfeksiyatashkent.uz/assets/bloxi-7e06d020.jpg`,
  cardTextOne = `Улар тўшакда, юмшоқ мебелда, тўқимачиликда, ешик ромлари ва дераза ромлари остида яшайдилар. Улар одамлар ва иссиқ қонли ҳайвонларнинг қони билан озиқланади. Аллергия ва оғир психологик ноқулайликни қўзғатинг...`,
  cardTextTwo = `Улар патогенларни олиб юрадилар. Улар ёриқларда, таглик тагида, мебел орқасида, ҳаммом остида, шкафлар остида ва ҳоказоларда яшайдилар. Улар озиқ-овқат, маиший чиқиндилар, чарм буюмлар ва қоғоз билан озиқланадилар.`,
  cardTextThree = `Ҳашаротлар ва арахнидлар билан озиқланадиган иссиқликни яхши кўрадиган жонзотлар. Улар омборларда ва уйларда яшашлари мумкин, лекин кўпинча улар ёғоч биноларда топилади ...`,
  cardTextFour = `Енг кенг тарқалган каламушлар ва сичқонлар. Улар патогенларни олиб юради, барча сиртларда ишлайди, девор ва шифтларда ўтиш жойларини яратади, структуранинг ишончлилигини пасайтиради. Улар озиқ-овқат ва маиший чиқиндилар билан озиқланади...`,
  cardTextFive = `Улар уй ҳайвонлари танасига кириб, қўшнилардан кўчиб кетишади. Улар юмшоқ мебеллар, кўрпа-тўшаклар, гиламлар, юмшоқ ўйинчоқлар, таглик тагида ва дераза ва ешик ромларида яшайдилар. Улар одамлар ва ҳайвонларнинг қони билан озиқланади. Улар касалликларга олиб келади ...`;


  class Services extends React.Component {
  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="services__content">
            <h2>Хизматлар</h2>
            <p>Биз сизга самарали ва кафолатли хизмат тақдим етамиз.</p>
          </div>
          <ul className="services__list">
            <ServicesCards key={1} img={imgOne} title="Дезинфексия - зарарли микро организмларни йўқ қилиш" text={textOne} />
            <ServicesCards key={2} img={imgTwo} title="Дезинсексия - ҳашаротларни йўқ қилиш" text={textTwo} />
            <ServicesCards key={3} img={imgThree} title="Дератизатсия - кемирувчиларни йўқ қилиш." text={textThree}  />
          </ul>
          <div id="services-type">
            <h2>Хизмат тури</h2>
            <ul className="services__type__list">
              <ServicesTypeCards key={1} img={cardImgOne} title="КЛАПАЛАР" text={cardTextOne} />
              <ServicesTypeCards key={2} img={cardImgTwo} title="ТАРАКАНЛАР" text={cardTextTwo} />
              <ServicesTypeCards key={3} img={cardImgThree} title="ЧАЁН" text={cardTextThree} />
              <ServicesTypeCards key={4} img={cardImgFour} title="КЕМИРУВЧИЛАР" text={cardTextFour} />
              <ServicesTypeCards key={5} img={cardImgFive} title="БУРГАЛАР" text={cardTextFive} />
            </ul>
          </div>
          <div id="services-licensia">
            <img src="https://st2.depositphotos.com/3163989/7417/i/950/depositphotos_74177605-stock-photo-composition-of-cleaning-products.jpg" />
            <div className="licensia__content">
              <img src="https://www.dezinfeksiyatashkent.uz/assets/d3icons-b8f1c170.svg" />
              <h3>Расмий кафолат - 1 йил. Биз жизмоний ва юридик шахсларга хизмат курсатамиз. Хизматлар лицензияланган!!!</h3>
              <a href="#contact" id="licensia-btn" className="contact__btn btn">Богланиш</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;