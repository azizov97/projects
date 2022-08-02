import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (selectedId) => {
    const counters = this.state.counters.filter(({ id }) => id !== selectedId);
    this.setState({ counters });
  };

  handleReset = () => {
    this.state.counters.map((counter) => (counter.value = 0));
    this.setState(this.state);
  };

  handleIncrement = (selectedId) => {
    const idx = this.state.counters.findIndex(({ id }) => id === selectedId);
    const counter = this.state.counters[idx];
    counter.value++;
    this.setState(this.state);
  };

  handleDecrement = (selectedId) => {
    const idx = this.state.counters.findIndex(({ id }) => id === selectedId);
    const counter = this.state.counters[idx];
    if (counter.value !== 0) {
      counter.value--;
      this.setState(this.state);
    }
  };

  render() {
    const amount = this.state.counters.filter(({ value }) => value > 0).length;
    return (
      <>
        <Navbar amount={amount} />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
