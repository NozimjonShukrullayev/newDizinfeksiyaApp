import Header from '../header/Header';
import Hero from '../hero/Hero';
import About from '../about/About';
import Services from '../services/Services';
import Faq from '../fak/Fak';
import Contact from '../contact/Contacts';
import Footer from '../footer/Footer';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Fragment } from "react";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['uz', 'ru',],
    fallbackLng: 'uz',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;