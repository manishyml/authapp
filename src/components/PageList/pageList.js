import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../Table/Table";
import ACTIONS from "../../constants/action-types";
import "./pageList.less";

class PageList extends Component {
  state = {
    data: [
      {
        name: "Item",
        inputType: "select"
      },
      {
        name: "Material Fee",
        inputType: "currency"
      },
      {
        name: "Packing Fee",
        inputType: "currency"
      },
      {
        name: "Unpacking Fee",
        inputType: "text"
      }
    ]
  };

  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <div className="pagelist_parent">
        <Table content={this.state.data} />
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
    getCategories: () => {
      dispatch({ type: ACTIONS.SEARCH.GET_CATEGORIES });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
