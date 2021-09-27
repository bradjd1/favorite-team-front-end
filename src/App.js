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

  addTeam = async (event) => {
    console.log('start addTeam');
   
    event.preventDefault();
    
    const response = await axios.post(this.apiUrl, {
      name: event.target.name.value
    });

    // reset input box on screen to blank
    event.target.name.value = '';

    const tempTeams = this.state.teams;
    tempTeams.push(response.data.team);
    this.setState({ teams: tempTeams });

    console.log('leave addTeam');
  };

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
            addTeam={this.addTeam}
            />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
