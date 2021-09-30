import React from 'react';
import './AllTeams.css';
import { Link } from 'react-router-dom';

export default function AllTeams(props) {
    const teams = props.teams.map((team) => {
        return (
            <li key={team.id}>
                <Link to={`/teams/${team.id}`}>{team.name}</Link>
                &nbsp; {team.sport} &nbsp; {team.league} &nbsp; {team.city}
                &nbsp; 
                <button onClick={() =>props.deleteTeam(team.id)}>Delete</button>
            </li>
        )
    });
    return (
        <div className='AllTeams'>
        <div className='innerTeam'>
            <h2>Favorite Teams</h2>
            <form onSubmit={props.addTeam}>
                <label for='team'>Team:</label>
                <input type='text' name='name' />
                <label for='sport'> Sport:</label>
                <input type='text' name='sport' />
                <label for='league'> League:</label>
                <input type='text' name='league' />
                <label for='city'> City:</label>
                <input type='text' name='city' />
                &nbsp; 
                <input type='submit' value='Add Team' />
            </form>
            <ul className='teams'>{teams}</ul>
        </div>
        </div>
    );
}