import React from 'react'
import './gridstyle.css'

export default function Gridtemplate({ place, teamName, teamIconUrl, points, matches, won, lost, draw, opponentGoals, goals, goaldiff }) {
    return (
        <div className='teamscontainer'>
            <span>{place}</span>
            <span>{teamName}</span>
            <img src={teamIconUrl} alt='' className='logo'></img>
            <span>{matches}</span>
            <span>{points}</span>
            <span>{won}</span>
            <span>{lost}</span>
            <span>{draw}</span>
            <span>{goals}</span>
            <span>{opponentGoals}</span>
            <span>{goaldiff}</span>
        </div>


    )
}
