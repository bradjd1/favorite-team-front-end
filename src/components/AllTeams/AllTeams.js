import React from 'react';
import './AllTeams.css';
import { Link } from 'react-router-dom';

export default function AllTeams(props) {
    // receives an array of teams.  process each team in the array
    // and build a team line element to return
    const teams = props.teams.map((team) => {
        return (

            <div key={team.id} className='grid-container'>
                <div className='listName'>
                    <Link to={`/teams/${team.id}`}>{team.name}</Link>
                </div>
                <div className='listSport'>{team.sport}</div>
                <div className='listLeague'>{team.league}</div>
                <div className='listCity'>{team.city}</div>
                <button onClick={() => props.deleteTeam(team.id)}>Delete</button>

            </div>
        )
    });
    return (
        <div className='AllTeams'>
            <div className='innerTeam'>
                <h2>Favorite Teams</h2>
                <form onSubmit={props.addTeam}>
                    <div className='submitField field'>
                        <label for='team'>Team Name</label>
                        <input type='text' name='name' />
                    </div>
                    <div className='submitField sport'>
                        <label for='sport'>Sport</label>
                        <input type='text' name='sport' />
                    </div>
                    <div className='submitField league'>
                        <label for='league'>League</label>
                        <input type='text' name='league' />
                    </div>
                    <div className='submitField city'>
                        <label for='city'>City</label>
                        <input type='text' name='city' />
                    </div>
                    <div className='sub'>
                        <br />
                        <input className='button' type='submit' value='Add Team' />
                    </div>
                </form>
                <ul className='teams'>{teams}</ul>
            </div>
        </div>
    );
}