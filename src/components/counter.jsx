import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    count: 0
  };

  componentDidMount = () => {
    this.setState({ count: this.props.counter.value });
  };

  handleIncrement() {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
