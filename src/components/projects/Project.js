import React, { Component } from "react";
class Project extends Component {
  state = {};
  render() {
    let { cover, title, id, description, link } = this.props.info;
    return (
      <div class="col-lg-6 col-md-6 project-container">
        <div
          data-aos="fade-left"
          class="project-container"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div class="overlay"></div>
          <div className="overlay__content">
            <p class="project-title">{title}</p>
            <button
              type="button"
              class="modal-btn"
              data-toggle="modal"
              data-target={`#${id}`}
            >
              Voir le projet
            </button>
          </div>
        </div>
        <div
          class="modal fade project__modal"
          id={id}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="row">
                  <div class="col-lg-6">
                    <img
                      class="project-img img-fluid"
                      src={cover}
                      alt={title}
                    ></img>
                  </div>
                  <div class="col-lg-6">
                    <h2 class="modal-title">{title}</h2>
                    <p>{description}</p>
                    <div class="control-wrapper">
                      <button
                        type="button"
                        class="modal-btn"
                        data-dismiss="modal"
                      >
                        <i class="fas fa-times"></i> Fermer
                      </button>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="modal-btn"
                        >
                          <i class="fas fa-code"></i>Voir le projet
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
