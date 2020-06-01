import React, { Component } from "react";

class Skill extends Component {
  state = {};
  render() {
    return (
      <div className="col-4">
        <img
          src={`./img/icons/${this.props.img}.png`}
          alt={this.props.name}
          srcSet={`./img/icons/${this.props.img}.svg`}
        ></img>
      </div>
    );
  }
}

export default Skill;
