import React, { Component } from "react";

class AboutSection extends Component {
  state = {};
  render() {
    return (
      <section class="section about" id="about">
        <div class="container">
          <h2 class="section-title">A propos</h2>
          <div class="about-me">
            <img class="about-img" src="./img/me.png" alt="me"></img>
            <div class="about-me-text-container">
              <p class="greeting">Hello !</p>
              <p class="about-me-text">
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
