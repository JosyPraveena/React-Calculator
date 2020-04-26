import React from "react";
import "./styles.css";
import Result from "./Result";
import Buttons from "./Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.clear();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: eval(this.state.result)
      });
    } catch (e) {
      alert("Error occured " + e);
    }
  };
  clear = () => {
    this.setState({
      result: ""
    });
  };
  render() {
    return (
      <>
        <Result total={this.state.result} />
        <Buttons onClick={this.onClick} />
      </>
    );
  }
}

export default App;
