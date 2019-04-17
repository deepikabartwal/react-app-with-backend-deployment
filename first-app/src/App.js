import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseLaunchCount() {
    fetch("/increase_count")
      .then(res => res.json())
      .then(jsonData => this.setState(jsonData));
  }

  render() {
    return (
      <div className="launching-platform">
        <div className="launched-missile-details">
          You Have Launched {this.state.count} missiles.
        </div>
        <button
          className="launch-button"
          onClick={this.increaseLaunchCount.bind(this)}
        >
          Launch Missile
        </button>
      </div>
    );
  }
}

export default App;
