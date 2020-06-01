import React, { Component } from "react";
class Project extends Component {
  state = {};
  render() {
    let { cover, title, id, description, link } = this.props.info;
    return (
      <div className="col-lg-6 col-md-6 project-container">
        <div
          data-aos="fade-left"
          className="project-container"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="overlay"></div>
          <div className="overlay__content">
            <p className="project-title">{title}</p>
            <button
              type="button"
              className="modal-btn"
              data-toggle="modal"
              data-target={`#${id}`}
            >
              Voir le projet
            </button>
          </div>
        </div>
        <div
          className="modal fade project__modal"
          id={id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="project-img img-fluid"
                      src={cover}
                      alt={title}
                    ></img>
                  </div>
                  <div className="col-lg-6">
                    <h2 className="modal-title">{title}</h2>
                    <p>{description}</p>
                    <div className="control-wrapper">
                      <button
                        type="button"
                        className="modal-btn"
                        data-dismiss="modal"
                      >
                        <i className="fas fa-times"></i> Fermer
                      </button>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-btn"
                        >
                          <i className="fas fa-code"></i>Voir le projet
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
