import React from "react";

class ServicesTypeCards extends React.Component {
  render() {
    return (
      <li className="type__item">
        <img src={this.props.img} />
        <div className="type__card__content">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          <a href="#" className="contact__btn btn">Богланиш</a>
        </div>
      </li>
    );
  }
}

export default ServicesTypeCards;