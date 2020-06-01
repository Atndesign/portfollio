import React, { Component } from "react";

import Skill from "./Skill";
let skills = {
  front: [
    {
      name: "HTML",
      img: "html",
    },
    {
      name: "CSS",
      img: "css",
    },
    {
      name: "JS",
      img: "js",
    },
    {
      name: "Boostrap",
      img: "bootstrap",
    },
    {
      name: "Jquery",
      img: "jquery",
    },
    {
      name: "Sass",
      img: "sass",
    },
    {
      name: "React",
      img: "react",
    },
    {
      name: "Git",
      img: "git",
    },
  ],
  back: [
    {
      name: "PHP",
      img: "php",
    },
    {
      name: "symfony",
      img: "symfony",
    },
    {
      name: "JS",
      img: "js",
    },
    {
      name: "node JS",
      img: "node",
    },
  ],
};

class Skills extends Component {
  state = {};
  render() {
    return (
      <section className="section tech" id="tech">
        <div className="container">
          <h2 className="section-title --black">
            Les differentes technologies que j’ai pu utiliser
          </h2>
          <div className="row">
            <div className="col-lg-5">
              <div className="tech-front">
                <p className="tech-cat">Front end</p>
                <div className="row">
                  {skills.front.map((e) => (
                    <Skill name={e.name} img={e.img} key={e.name} />
                  ))}
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <p className="tech-cat">Back end</p>
              <div className="tech-back">
                <div className="row">
                  {skills.back.map((e) => (
                    <Skill name={e.name} img={e.img} key={e.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
