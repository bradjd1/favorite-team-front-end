import React from "react";
import './TeamDetail.css';

export default function TeamDetail(props) {
    const team = props.teams.find(team => {
        return team.id == props.match.params.id;
    });

    const players = team.Players.map(player =>
        <li key={player.id}>{player.name} &nbsp; {player.position} &nbsp; 
          <button onClick={() => props.deletePlayer(player.id)}>Delete</button>
        </li>);

    return (
        <div className='TeamDetail'>
            <div className='innerDetail'>
                <h2>Players for the {team.name}</h2>

                <form onSubmit={props.addPlayer}>
                    <input type='hidden' name='teamId' value={team.id} />
                    <label for='name'>Name: </label>
                    <input type='text' name='name' />
                    <label for='position'>&nbsp; &nbsp; Position: </label>
                    <input type='text' name='position' />
                    <input type='submit' value='Add Player' />
                </form>

                <ul className='players'> {players} </ul>
            </div>
        </div>
    );
}