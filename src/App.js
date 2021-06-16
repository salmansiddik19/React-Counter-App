import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 10 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    console.log("App-Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log({ counters });
  };

  handleReset = () => {
    console.log("Reset Clicked");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App-Rendered");
    return (
      <div className="container">
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
