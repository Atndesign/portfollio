import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title --black">Contactez moi</h2>
          <div className="row">
            <div className="col-lg-6">
              <form action="">
                <label className="input-label" htmlFor="email">
                  Entrez votre email
                </label>
                <input className="input" id="email" type="email"></input>
                <label className="input-label" htmlFor="name">
                  Entrez votre nom
                </label>
                <input className="input" id="name" type="text"></input>
                <label className="input-label" htmlFor="object">
                  Objet
                </label>
                <input className="input" id="object" type="text"></input>
                <label className="input-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="input"
                  name=""
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="contact-form-sub" type="submit">
                  Envoyer
                </button>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="contact-medias">
                <a target="_blank" href="https://github.com/Atndesign/">
                  <img
                    className="media-icons"
                    src="./img/icons/github.png"
                    alt="github"
                    srcSet="./img/icons/github.svg"
                  ></img>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kevin-moulun-233b64174/"
                >
                  <img
                    className="media-icons"
                    src="./img/icons/linkedin.png"
                    alt="linkedin"
                    srcSet="./img/icons/linkedin.svg"
                  ></img>
                </a>
                <a target="_blank" href="mail:moulun.kevinn@gmail.com">
                  <img
                    className="media-icons"
                    src="./img/icons/mail.png"
                    alt="mail"
                    srcSet="./img/icons/mail.svg"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
