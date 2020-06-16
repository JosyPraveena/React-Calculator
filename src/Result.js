import React from "react";
import "./styles.css";

class Result extends React.Component {
  render() {
    const { total, clear } = this.props;
    return (
      <div className="calculator">
        <div className="main">
          <div className="top">
            <button className="clear" onClick={clear}>
              C
            </button>
            <div className="screen"> {total} </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
