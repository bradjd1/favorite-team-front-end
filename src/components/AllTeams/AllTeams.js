import React from 'react';
import './AllTeams.css';
import { Link } from 'react-router-dom';

export default function AllTeams(props) {
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
                    <div className='submitField'>
                        <label for='team'>Team</label>
                        <input type='text' name='name' />
                    </div>
                    <div className='submitField'>
                        <label for='sport'>Sport</label>
                        <input type='text' name='sport' />
                    </div>
                    <div className='submitField'>
                        <label for='league'>League</label>
                        <input type='text' name='league' />
                    </div>
                    <div className='submitField'>
                        <label for='city'>City</label>
                        <input type='text' name='city' />
                    </div>
                        <input type='submit' value='Add Team' />
                  
                </form>
                <ul className='teams'>{teams}</ul>
            </div>
        </div>
    );
}