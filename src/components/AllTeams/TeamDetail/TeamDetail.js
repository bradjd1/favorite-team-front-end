import React from "react";
import './TeamDetail.css';

export default function TeamDetail(props) {
    console.log('in teamdetails ', props.match.params.id)
    const team = props.teams.find(team => {
        console.log('team is ', team);
        return team.id == props.match.params.id;
    });

    const players = team.Players.map(player => <li key={player.id}>{player.name}</li>);

    return (
        <div className='TeamDetail'>
            <h2>Players for the {team.name}s</h2>
            <ul> {players} </ul>
        </div>
    );
}