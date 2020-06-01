import React, { Component } from "react";

import Project from "./Project";

let projectList = [
  {
    title: "Markdown converter",
    id: "markdown",
    cover:
      "https://raw.githubusercontent.com/Atndesign/Markdown-converter/master/screen.png",
    description:
      "Markdown-converter est un projet fait avec react, realiser avec un seul objectif me faire progresser en react JS , je voulais un outil capable de transcrire du markdown en HTML structuré",
    link: "https://atndesign.github.io/Markdown-converter/",
  },
  {
    title: "Memory React",
    id: "memory",
    cover:
      "https://raw.githubusercontent.com/Atndesign/Memory/master/screen.png",
    description:
      "Memory React, est un projet basé sur le framework React, dans ce projet on peut choisir la taille de la grille et bien sur y joué",
    link: "https://atndesign.github.io/Memory/",
  },
  {
    title: "Sales&Go",
    id: "salesgo",
    cover:
      "https://raw.githubusercontent.com/Atndesign/Sales-Go/master/screen.png",
    description:
      "Sales&Go est un petit projet que j'ai voulu realiser afin de comprendre un peux mieux React, l'objectif de cette web app est de convertir un prix avec une reduction",
    link: "https://atndesign.github.io/Sales-Go/",
  },
  {
    title: "Daily code",
    id: "dailycode",
    cover:
      "https://raw.githubusercontent.com/Atndesign/dailycode/master/screen.png",
    description:
      "L'idée de daily code etait de documenter mon avancé dans le developpement web front end, le but etait de realiser un projet tout les jours, afin d'apprendre de nouvelles competences",
    link: "https://atndesign.github.io/dailycode/",
  },
];
class Projects extends Component {
  state = {};
  render() {
    return (
      <section className="section projects" id="projects">
        <div className="container">
          <h2 className="section-title">Mes differentes realisations</h2>
          <div className="row">
            {projectList.map((project) => (
              <Project info={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
