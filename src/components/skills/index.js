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
      <section class="section tech" id="tech">
        <div class="container">
          <h2 class="section-title --black">
            Les differentes technologies que j’ai pu utiliser
          </h2>
          <div class="row">
            <div class="col-lg-5">
              <div class="tech-front">
                <p class="tech-cat">Front end</p>
                <div class="row">
                  {skills.front.map((e) => (
                    <Skill name={e.name} img={e.img} />
                  ))}
                </div>
              </div>
            </div>
            <div class="offset-lg-1 col-lg-5">
              <p class="tech-cat">Back end</p>
              <div class="tech-back">
                <div class="row">
                  {skills.back.map((e) => (
                    <Skill name={e.name} img={e.img} />
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
