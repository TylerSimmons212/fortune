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
      favoriteFortune:[],
      userInput:''
    }
    this.removeFortune=this.removeFortune.bind(this)
    this.editFortune=this.editFortune.bind(this)
    this.updateFavorites=this.updateFavorites.bind(this)
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
        fortunes: res.data.text
      })
  })
}
removeFortune( id ) {
  console.log(id)
  axios.delete( `/api/fortune/${id}` ).then( response => {
    console.log(response);
    
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
editFortune( id, text ) {
  console.log(id, text);
  let newObj={text:text}
  axios.put(`/api/fortune/${id}`,newObj).then( response => {
    console.log(response.data);
    
    this.setState({ favoriteFortune: response.data });
  });
}
updateFavorites(text){
  this.setState({userInput:text})
}

  render () {
    let faveFortunes = this.state.favoriteFortune.map( (fortune, i) => {
      return (
        <List id={fortune.id} favoriteFortune={fortune.text} delete={this.removeFortune} edit={this.editFortune} update={this.updateFavorites} i={i} userInput={this.state.userInput}/>
      )
    })

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
