import React from "react";

class ServicesCards extends React.Component {
  render() {
    return (
      <li data-aos="fade-right" data-aos-duration={this.props.dataAos} className="services__item">
        <img src={this.props.img} />
        <div className="services__item__content">
          <h3>{this.props.title}</h3>
          <p className="paragraph">{this.props.text}</p>
        </div>
      </li>
    );
  }
}

export default ServicesCards;