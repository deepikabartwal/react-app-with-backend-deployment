import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  componentDidMount(){
    fetch("/get_data").then(res=>res.json()).then(jsonData=>this.setState(jsonData))
  }
  render() {
    return (
      <div className="App">
        {this.state.data}
      </div>
    );
  }
}

export default App;
