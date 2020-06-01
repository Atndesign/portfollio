import React, { Component } from "react";

class AboutSection extends Component {
  state = {};
  render() {
    return (
      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-title">A propos</h2>
          <div className="about-me">
            <img className="about-img" src="./img/me.png" alt="me"></img>
            <div className="about-me-text-container">
              <p className="greeting">Hello !</p>
              <p className="about-me-text">
                Je m'appelle Kevin, je suis un developpeur junior passioné par
                les technologies de toute sortes, mais surtout celles du web.
                J’adore apprendre de nouvelles choses, de nouvelles
                technologies, experimenté egalement
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
