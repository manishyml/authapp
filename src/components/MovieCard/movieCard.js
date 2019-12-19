import React, { Component } from "react";
import "./movieCard.less";
class MovieCard extends Component {
  state = {};
  render() {
    return (
      <div className="movieCard_parent">
        <div className="movieCard">
          <div className="movieRating"></div>
          <div className="movieDetails"></div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
