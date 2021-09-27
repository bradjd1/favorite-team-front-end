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
      teams: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(this.apiUrl);
    this.setState({ teams: response.data.teams });
    console.log('teams is ', this.state.teams)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Favorite Teams</header>
        <h1>My Favorite Teams</h1>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Switch>
          <Route path='/teams'
            exact component={() => <AllTeams
            teams={this.state.teams}
            />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
