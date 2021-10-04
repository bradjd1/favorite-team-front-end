import React from "react";
import './TeamDetail.css';

export default function TeamDetail(props) {
    const team = props.teams.find(team => {
        return team.id == props.match.params.id;
    });

    // a team has an array containing the players on the team
    // loop through the players array and build a Player line item
    const players = team.Players.map(player =>
        <div key={player.id} className='playerContainer'>
            <div>{player.name}</div>
            <div>{player.position}</div>
            {/* <li key={player.id}>{player.name} &nbsp; {player.position} &nbsp; */}
            <button className='playerDel' onClick={() => props.deletePlayer(player.id)}>Delete</button>
            {/* </li> */}
        </div>
    );
    return (
        <div className='TeamDetail'>
            <div className='innerDetail'>
                <h2>Players for the {team.name}</h2>

                <form onSubmit={props.addPlayer}>
                    <input type='hidden' name='teamId' value={team.id} />
                    <div className='playerName' >
                        <label for='name'>Name: </label>
                        <input type='text' name='name' />
                    </div>
                    <div className='playerPosition'>
                        <label for='position'>&nbsp; &nbsp; Position: </label>
                        <input type='text' name='position' />
                    </div>
                    <div>
                        <label>&nbsp;</label>
                        <input type='submit' value='Add Player' className='playerAdd' />
                    </div>
                </form>

                <ul className='players'> {players} </ul>
            </div>
        </div>
    );
}