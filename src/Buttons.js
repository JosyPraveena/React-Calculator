import React from "react";
import "./styles.css";

class Buttons extends React.Component {
  render() {
    return (
      <div class="keys">
        <button name="7" onClick={e => this.props.onClick(e.target.name)}>
          7
        </button>
        <button name="8" onClick={e => this.props.onClick(e.target.name)}>
          8
        </button>
        <button name="9" onClick={e => this.props.onClick(e.target.name)}>
          9
        </button>
        <button
          name="+"
          onClick={e => this.props.onClick(e.target.name)}
          className="operator"
        >
          +
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="4">
          4
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="5">
          5
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="6">
          6
        </button>
        <button
          onClick={e => this.props.onClick(e.target.name)}
          name="-"
          className="operator"
        >
          -
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="1">
          1
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="2">
          2
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="3">
          3
        </button>
        <button
          onClick={e => this.props.onClick(e.target.name)}
          name="/"
          className="operator"
        >
          /
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name="0">
          {" "}
          0
        </button>
        <button onClick={e => this.props.onClick(e.target.name)} name=".">
          .
        </button>
        <button
          onClick={e => this.props.onClick(e.target.name)}
          name="="
          className="eval"
        >
          =
        </button>
        <button
          onClick={e => this.props.onClick(e.target.name)}
          name="*"
          className="operator"
        >
          x
        </button>
      </div>
    );
  }
}
export default Buttons;
