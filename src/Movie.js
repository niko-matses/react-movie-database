import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    desc: PropTypes.string
  };

  static defaultProps = {
    desc: "Description not available"
  };

  render() {
    return (
      <div>
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
