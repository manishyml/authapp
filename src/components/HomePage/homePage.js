import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "../MovieCardInfo/movieCardInfo";
import ACTIONS from "../../constants/action-types";
import STRINGS from "../../constants/strings";
import "./homePage.less";

class Home extends Component {
  state = {
    imageUrl: [],
    imageOfSubCategories: []
  };
  componentDidMount() {
    this.props.fetchTrendingMovies();
  }

  render() {
    const { movieList } = this.props;
    return (
      <div className="home_parent">
        <div className="movieList_parent">
          {movieList.map((item, index) => (
            <MovieCard data={item} key={index} />
          ))}
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
    fetchTrendingMovies: () => {
      dispatch({ type: ACTIONS.SEARCH.LOAD_VENUE_LIST });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
