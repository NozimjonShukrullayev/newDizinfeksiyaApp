import React from "react";
import { useState } from "react";
import contactImg from "./contact-img.png";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const [myName, setMyName] = useState('');
  const [myPhone, setMyPhone] = useState('');
  const [modal, setModal] = useState(false);

  const modalToggle = (e) => {
    e.preventDefault();
    setMyName('')  
    setMyPhone('')  
    setModal(true)
    setTimeout(() => setModal(false), 5000)
  }
  
  const removeModal = () => {
    setModal(false)
  }

  return (
    <section id="contact">
      <div className="container">
        <form id="contact-form" action="" className="contact__form" onSubmit={modalToggle}>
          <img src={contactImg} />
          <div className="contact__box">
            <div>
              <h4>{t('contactTitle')}</h4>
              <input onChange={(e) => setMyName(e.target.value)} value={myName} name="name" id="name" placeholder={t('contactInputPlaceholder')} required type="text" autoComplete="off" />
              <input onChange={(e) => setMyPhone(e.target.value)} value={myPhone} name="phone" id="phone" placeholder="+998-99-044-99-44" required type="number" autoComplete="off" />
              <button type="submit">{t('contactSubmit')}</button>
            </div>
          </div>
        </form>
        <section className={`modal__section ${modal && 'active'}`}>
          <div className="modal__bg"></div>
          <div className="modal">
            <div className="modal__content">
              <i className='bx bx-check'></i>
              <h3>{t('modalTitle')}</h3>
              <i onClick={removeModal} className='bx bx-x'></i>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;