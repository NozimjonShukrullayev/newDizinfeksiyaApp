import React from "react";

class AboutCards extends React.Component {
  render() {
    return (
      <li data-aos="fade-right" data-aos-duration={this.props.dataAos} className="card__item">
        <div>{this.props.img}</div>
        <h3>{this.props.title}</h3>
        <p className="paragraph">{this.props.text}</p>
      </li>
    );
  }
}

export default AboutCards;