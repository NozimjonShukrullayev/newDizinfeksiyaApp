import React from "react";

class Header extends React.Component {
  render() {
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
                  <a href="#hero-section" className="nav__link">Асосий</a>
                </li>
                <li>
                  <a href="#about-section" className="nav__link">Биз ҳақимизда</a>
                </li>
                <li>
                  <a href="#services" className="nav__link">Хизматлар</a>
                </li>
                <li>
                  <a href="#faq-section" className="nav__link">ФАҚ</a>
                </li>
                <li>
                  <select name="language" id="language">
                    <option value="uz">Узбекча</option>
                    <option value="ru">Русский</option>
                  </select>
                </li>
                <a href="#contact" className="nav__link contact__btn btn">Богланиш</a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );   
  }
}

export default Header;