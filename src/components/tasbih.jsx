import { Component } from "react";
import "./tasbih.css";

class Tasbih extends Component {
  state = {
    count: 0,
    resetCount: 0,
  };

  handleCount() {
    this.setState({ count: this.state.count + 1, resetCount: 0 });
  }

  handleReset() {
    this.setState({ resetCount: this.state.count });
    this.setState({ count: 0 });
  }

  handleBack() {
    if (this.state.count !== 0)
      return this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="wrapper">
        <h1>Tasbih</h1>

        <span>{this.state.count}</span>
        <div
          className="b-circle"
          onClick={() => {
            this.handleCount();
          }}
        >
          <h4> &#8743;</h4>
        </div>
        <div
          className="s-circle"
          onClick={() => {
            this.handleBack();
          }}
        >
          <h2>&#8744;</h2>
        </div>

        <div className="buttons">
          <button
            className="btn"
            onClick={() => {
              this.handleReset();
            }}
          >
            Reset
          </button>
          <button
            className="btn"
            onClick={() => {
              this.handleBack();
            }}
          >
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default Tasbih;
