import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


import SingleFortune from './Components/SingleFortune'
import Cookie from './Components/Cookie'
import Header from './Components/Header'
import List from './Components/List'

class App extends Component {

  constructor(){
    super()
    this.state = {
      fortunes:'',
      favoriteFortune:[]
    }
  }
  // componentDidMount(){
  //   axios.get( '/api/fortune' ).then( response => {
  //     this.setState({ favoriteFortune: response.data });
  //   });
  // }

  getFortune = () => {
    axios.get('/api/fortune')
    .then(res => {
      console.log(res)
      this.setState({
        fortunes: res.data
      })
  })
}
removeFortune( id ) {
  axios.delete( '/api/fortune/:id' ).then( response => {
    this.setState({ favoriteFortune: response.data });
  });
}

addFavorite = ()=> {
  const selectedFortune = {
    selectedFortune: this.state.fortunes
  }
  axios.post('/api/fortune',selectedFortune)
  .then( response => {
      this.setState({ favoriteFortune: response.data });
  })
}

  render () {
    let faveFortunes = this.state.favoriteFortune.map( fortune => {
      return (
        <List favoriteFortune={fortune}/>
      )
    })
    console.log(this.state.fortunes)

    return (
      <div className="App">
        <Header />
        <Cookie getFortune={this.getFortune}/>
        <SingleFortune fortune={this.state.fortunes} addFavorite={this.addFavorite} />
        {faveFortunes}
      </div>
    )
  }
}

export default App;
