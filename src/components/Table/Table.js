import React, { Component } from "react";
import Row from "../Row/Row";
import "./Table.less";
class Table extends Component {
  state = {
    tableContent: []
  };
  updateSelection = event => {
    console.log("hey", event.target.value);
  };
  onDelete = index => {
    console.log(index);
    const tempTableData = [...this.state.tableContent];
    // const temp = tempTableData.filter((item, index) => index !== indexToDelete);
    tempTableData.splice(index, 1);
    this.setState({ tableContent: tempTableData });
  };
  onClickHandler = content => {
    const newContent = content.map(item => {
      return {
        inputType: item.inputType,
        data: [{ title: "Select an item" }, { title: "bmw" }, { title: "audi" }]
      };
    });
    this.setState(prevState => ({
      tableContent: [...prevState.tableContent, newContent]
    }));
  };
  render() {
    return (
      <div>
        <table className="table_parent">
          <tbody>
            <tr className="table_heading">
              {this.props.content.map((item, index) => {
                return (
                  <th className="table_heading_entry" key={index}>
                    {item.name}
                  </th>
                );
              })}
            </tr>
            {this.state.tableContent.map((item, index) => {
              return (
                <Row
                  key={index}
                  index={index}
                  tableContent={item}
                  updateSelection={this.updateSelection}
                  deleteHandler={this.onDelete}
                />
              );
            })}
          </tbody>
        </table>
        <div
          className="add_btn"
          onClick={e => this.onClickHandler(this.props.content)}
        >
          Add item
        </div>
      </div>
    );
  }
}

export default Table;
