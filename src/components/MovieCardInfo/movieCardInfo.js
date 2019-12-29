import React, { Component } from "react";
import { connect } from "react-redux";
import "./movieCardInfo.less";

const posterBaseUrl = "http://image.tmdb.org/t/p/w200";

class MovieCardInfo extends Component {
  state = {};
  render() {
    const {
      title,
      rating,
      vote_count,
      adult,
      image,
      language,
      relase_date,
      overview,
      genre
    } = this.props.data;

    return (
      <div>
        <div className="movie_card">
          <img
            src={posterBaseUrl + image}
            className="movie_banner"
            alt="movie_banner"
          ></img>
          <div className="movie_title">{title}</div>
          <div className="movie_rating">{rating}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movieList: state.fetchList.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch({ type: ACTIONS.SEARCH.GET_CATEGORIES });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardInfo);
