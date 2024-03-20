import React from 'react'
import './gridstyle.css'

export default function Gridtemplate({ teamName, teamIconUrl, points, matches, won, lost, draw, opponentGoals, goals, goaldiff }) {
    return (
        <div className='teamscontainer'>
            <span>{teamName}</span>
            <img src={teamIconUrl} alt='' className='logo'></img>
            <span>{points}</span>
            <span>{matches}</span>
            <span>{won}</span>
            <span>{lost}</span>
            <span>{draw}</span>
            <span>{opponentGoals}</span>
            <span>{goals}</span>
            <span>{goaldiff}</span>
        </div>


    )
}
