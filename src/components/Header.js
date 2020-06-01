import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header class="header" id="home">
        <nav class="nav">
          <button id="offcanvas-toggler" class="offcanvas-toggler mobile-only">
            <img
              src="./img/icons/bars-solid.svg"
              alt="menu"
              height="16"
              width="16"
            ></img>
          </button>
          <a class="header-logo-container" href="#">
            <img class="header-logo" src="./img/Logo.png" alt="Logo"></img>
          </a>
          <ul class="nav-list desktop-only">
            <a href="#">
              <li class="nav-item">Acceuil</li>
            </a>
            <a href="#about">
              <li class="nav-item">A propos</li>
            </a>
            <a href="#projects">
              <li class="nav-item">Mes realisations</li>
            </a>
            <a href="#contact">
              <li class="nav-item">Contactez moi</li>
            </a>
          </ul>
        </nav>
        <div class="hero">
          <img
            class="illustration"
            src="./img/homeIllustration.png"
            alt="home illustration"
          ></img>
          <div class="hero-text">
            <h1 class="title">Kevin Moulun</h1>
            <p class="subtitle">Developpeur web junior</p>
            <a
              class="header-cv-btn"
              href="./CVMoulunKevin.pdf"
              download="Kevin Moulun CV"
            >
              Mon cv
            </a>
          </div>
        </div>
        <div class="mouse">
          <div class="mouse-cursor"></div>
        </div>
      </header>
    );
  }
}

export default Header;
