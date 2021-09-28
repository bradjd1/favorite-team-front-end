import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';

//import componenets
import AllTeams from './components/AllTeams/AllTeams.js'
import TeamDetail from './components/AllTeams/TeamDetail/TeamDetail.js'

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
  }

  addTeam = async (event) => {
    event.preventDefault();

    const response = await axios.post(this.apiUrl, {
      name: event.target.name.value
    });

    // reset input box on screen to blank
    event.target.name.value = '';

    const tempTeams = this.state.teams;
    tempTeams.push(response.data.team);
    this.setState({ teams: tempTeams });

  };

deleteTeam = async (delId) => {
  // issue the delete call

   const listPlayerUrl = `${this.apiUrl}/profile/${delId}`;
   console.log('list player url ',listPlayerUrl)
  const delTeamResponse = await axios.get(listPlayerUrl)
  console.log('response data is ',delTeamResponse.data)
  console.log('in del team ',delTeamResponse.data.Players.length)
  if (delTeamResponse.data.Players.length == 0) {
    const response = await axios.delete(`${this.apiUrl}/${delId}`)

    // make a new call to get list of teams and load teams page
    const responseRedirect = await axios.get(this.apiUrl);
    this.setState({ teams: responseRedirect.data.teams });
  } else {
    // need to delete players first
    alert('delete players from the team before deleting the team')
    console.log('players');
  }
}

  addPlayer = async (event) => {
    event.preventDefault();
    const teamId = event.target.teamId.value;
    const playerUrl = `${this.apiUrl}/${teamId}/players`;
    const response = await axios.post(playerUrl, {
      name: event.target.name.value
    })
    const teamResponse = response.data.team;
    const tempTeam = this.state.teams;
    const newTeam = tempTeam.map(team => {
      if(team.id == teamResponse.id) {
        return teamResponse;
      } else {
        return team
      }
    })
    this.setState({ teams: newTeam })
  };

  deletePlayer = async (delId) => {
    console.log('in del')
    console.log('id is ',delId)
    // issue the delete call
    //'/:teamId/players/:id'
    const response = await axios.delete(`${this.apiUrl}/${delId}/players/${delId}`)
  
    // make a new call to get list of teams and load teams page
    const responseRedirect = await axios.get(this.apiUrl);
    this.setState({ teams: responseRedirect.data.teams });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Favorite Teams</header>
        <h1>My Favorite Teams</h1>
        <nav>
          <Link to='/'>Home</Link> | <Link to='/teams'>Favorite Teams</Link>
        </nav>
        <Switch>
          <Route path='/teams'
            exact component={() => <AllTeams
              teams={this.state.teams}
              addTeam={this.addTeam}
              deleteTeam={this.deleteTeam}
            />}
          />
          <Route path='/teams/:id'
          component={(routerProps) => <TeamDetail
          {...routerProps}
          teams={this.state.teams}
          addPlayer={this.addPlayer}
          deletePlayer={this.deletePlayer}
          />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
