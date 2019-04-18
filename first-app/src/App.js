import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, names: [] };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let name = data.get("firstname");
    event.target.reset();
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify({ name });
    fetch("/add_name", { method: "POST", headers, body })
      .then(res => res.json())
      .then(jsonData => this.setState({ names: jsonData.names, count: jsonData.count}));
  }

  showNames(names) {
    return names.map(name => <div> {name} launched missile </div>);
  }

  render() {
    return (
      <div className="launching-platform">
        <div className="launched-missile-details">
          You Have Launched {this.state.count} missiles.
        </div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              First name:
              <input type="text" name="firstname" required />
            </label>

            <input className="launch-button" type="submit" value="Launch" />
          </form>
        </div>
        <div>{this.showNames(this.state.names)} </div>
      </div>
    );
  }
}

export default App;
