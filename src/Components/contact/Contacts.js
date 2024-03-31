import React from "react";
import contactImg from "./contact-img.png";


class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      modalSection: false,
    }
  }
  modalToggle = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      phone: '',
      modalSection: true,
    })
  }

  getInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    setInterval(this.removeModal, 6000)
  }
    
  removeModal = () => {
    this.setState((prevState) => ({
      modalSection: !prevState
    }))
  }

  render() {
    return (
      <section id="contact">
        <div className="container">
          <form id="contact-form" action="" className="contact__form" onSubmit={this.modalToggle}>
            <img src={contactImg} />
            <div className="contact__box">
              <div>
                <h4>Малумотингизни қолдиринг</h4>
                <input onChange={this.getInputValue} value={this.state.name} name="name" id="name" placeholder="Исмингиз" required type="text" autoComplete="off" />
                <input onChange={this.getInputValue} value={this.state.phone} name="phone" id="phone" placeholder="+998-99-044-99-44" required type="number" autoComplete="off" />
                <button type="submit">Юбориш</button>
              </div>
            </div>
          </form>
          <section className={`modal__section ${this.state.modalSection && 'active'}`}>
            <div className="modal__bg"></div>
            <div className="modal">
              <div className="modal__content">
                <i className='bx bx-check'></i>
                <h3>Мурожатингиз учун ташаккур. Тез орада сизга алоқага чиқамиз.</h3>
                <i onClick={this.removeModal} className='bx bx-x'></i>
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Contact;