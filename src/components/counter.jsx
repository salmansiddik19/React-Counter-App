import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("props", prevProps);
    console.log("state", prevState);
  }

  componentWillUnmount() {
    console.log("Counter-Unmount");
  }
  render() {
    console.log("Counter-Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge rounded-pill m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }
}

export default Counter;
