import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

//import componenets
import AllTeams from './components/AllTeams/AllTeams.js'
import TeamDetails from './components/AllTeams/TeamDetail/TeamDetail.js'

class App extends Component {
  constructor() {
    super();

    this.apiUrl = 'http://localhost:3000/api/teams'
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">Favorite Team</header>
        <h1>Favorite Team</h1>
      </div>
    );
  }
}

export default App;
