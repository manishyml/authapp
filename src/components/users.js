import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return <h1>{this.props.testMsg}</h1>;
  }
}
const mapStateToProps = state => {
  return {
    testMsg: state.fetchList.testMsg
  };
};
const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
