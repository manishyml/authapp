import React, { Component } from "react";
import "./Row.less";
class Row extends Component {
  state = {};
  render() {
    const { index, tableContent, deleteHandler, updateSelection } = this.props;
    // console.log({ tableContent });
    return (
      <tr className="table_row_parent">
        {tableContent.map((item, index) => {
          return (
            <td className="row_data" id={"row_data_entry_" + index} key={index}>
              {item.inputType === "select" && (
                <select
                  className="select_parent"
                  onChange={e => updateSelection(e)}
                >
                  {item.data.map((entry, index) => (
                    <option key={index}>{entry.title}</option>
                  ))}
                </select>
              )}
              {item.inputType === "currency" && (
                <div className="parent_container">
                  $ <input type="text"></input>
                </div>
              )}
              {item.inputType === "text" && (
                <div className="parent_container">
                  <input type="text"></input>
                </div>
              )}
            </td>
          );
        })}
        <td className="delete_btn" onClick={e => deleteHandler(index)}>
          DELETE
        </td>
      </tr>
    );
  }
}

export default Row;
