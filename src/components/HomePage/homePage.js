import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "../Search/search";
import Loader from "../Loader/loader";
import MovieCard from "../MovieCard/movieCard";
import ACTIONS from "../../constants/action-types";
import STRINGS from "../../constants/strings";
import "./homePage.less";

class Home extends Component {
  state = {
    imageUrl: [],
    imageOfSubCategories: []
  };
  handleSearch = e => {
    this.setState({ query: e.target.value }, () => {
      console.log(this.state.query);
    });
  };

  searchPlace = () => {
    this.props.fetchVenues(this.state.query);
  };

  render() {
    return (
      <div className="home_parent">
        <div className="searchbar_parent">
          <Loader />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    testMsg: state.fetchList.testMsg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchVenues: query => {
      dispatch({ type: ACTIONS.SEARCH.LOAD_VENUE_LIST, data: query });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
