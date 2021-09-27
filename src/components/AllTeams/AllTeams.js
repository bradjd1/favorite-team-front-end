import React from 'react';
import './AllTeams.css';
import { Link } from 'react-router-dom';

export default function AllTeams(props) {
    const teams = props.teams.map((team) => {
        return(
            <li key={team.id}>
                <Link to ={`/teams/${team.id}`}>{team.name}</Link>
            </li>
        )
    });
    return (
        <div>
            <h2>Favorite Teams</h2>
            <form>
                <input type='text' name='name'/>
                <input type='submit' value='Add Team'/>
            </form>
            <ul>{teams}</ul>
        </div>
    );
}