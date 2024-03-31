import React from "react";

class AboutCards extends React.Component {
  render() {
    return (
      <li className="card__item">
        <div>{this.props.img}</div>
        <h3>{this.props.title}</h3>
        <p className="paragraph">{this.props.text}</p>
      </li>
    );
  }
}

export default AboutCards;