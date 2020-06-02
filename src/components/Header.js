import React, { Component } from "react";

class Header extends Component {
  state = {
    isOpen: true,
    width: 0,
  };

  modal() {
    let newWidth = null;
    let newState = null;
    if (this.state.isOpen) {
      newState = false;
      newWidth = -100;
    } else {
      newState = true;
      newWidth = 0;
    }
    this.setState({
      width: newWidth,
      isOpen: newState,
    });
  }
  render() {
    return (
      <header className="header" id="home">
        <nav className="nav">
          <button
            id="offcanvas-toggler"
            className="offcanvas-toggler mobile-only"
            onClick={(e) => this.modal()}
          >
            <img
              src="./img/icons/bars-solid.svg"
              alt="menu"
              height="16"
              width="16"
            ></img>
          </button>
          <a className="header-logo-container" href="#">
            <img className="header-logo" src="./img/Logo.png" alt="Logo"></img>
          </a>
          <ul className="nav-list desktop-only">
            {this.props.links.map((link) => (
              <a href={link.url}>
                <li className="nav-item">{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
        <div className="hero">
          <img
            className="illustration"
            src="./img/homeIllustration.png"
            alt="home illustration"
          ></img>
          <div className="hero-text">
            <h1 className="title">Kevin Moulun</h1>
            <p className="subtitle">Developpeur web junior</p>
            <a
              className="header-cv-btn"
              href="./CVMoulunKevin.pdf"
              download="Kevin Moulun CV"
            >
              Mon cv
            </a>
          </div>
        </div>
        <div
          className="offcanvas-menu mobile-only"
          id="offcanvas"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ left: this.state.width + "%" }}
        >
          <button
            id="offcanvas-close"
            type="button"
            className="close"
            onClick={(e) => this.modal()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <ul className="nav-list">
            {this.props.links.map((link) => (
              <a href={link.url}>
                <li className="nav-item">{link.label}</li>
              </a>
            ))}
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
