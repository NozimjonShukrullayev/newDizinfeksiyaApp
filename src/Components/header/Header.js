import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import { Trans } from "react-i18next";
// componentni t qilish. i18nKey="jsondagi nomi"
import cookies from "js-cookie";
import i18next from "i18next";

function Header() {
  const { t } = useTranslation();

  const [selectVal, setSelectVal] = useState(cookies.get('i18next'))
  const handleClick = () => {
    cookies.get('i18next') == 'ru' ? cookies.set('i18next', 'uz') : cookies.set('i18next', 'ru')
    setSelectVal(cookies.get('i18next'))
    i18next.changeLanguage(cookies.get('i18next'))
  }

  return (
    <header id="site-header">
      <div className="container">
        <div className="header__grid">
          <a href="#index.html" className="header__logo">
            <img src="https://www.dezinfeksiyatashkent.uz/assets/dez_logo2-5b433e48.png" className="logo__img" />
          </a>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#hero-section" className="nav__link">{t('navOneLink')}</a>
              </li>
              <li>
                <a href="#about-section" className="nav__link">{t('navTwoLink')}</a>
              </li>
              <li>
                <a href="#services" className="nav__link">{t('navThreeLink')}</a>
              </li>
              <li>
                <a href="#faq-section" className="nav__link">{t('navFourLink')}</a>
              </li>
              <li>
                <select onChange={handleClick} value={selectVal} name="language" id="language">
                  <option value="uz">Узбекча</option>
                  <option value="ru">Русский</option>
                </select>
              </li>
              <a href="#contact" className="nav__link contact__btn btn">{t('contactBtn')}</a>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );   
}

export default Header;