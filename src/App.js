import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super()
    this.state = {
      fortunes:[]
    }
  }
  componentDidMount(){
    axios.get('')
    .then(res => console.log(res))
  }
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
