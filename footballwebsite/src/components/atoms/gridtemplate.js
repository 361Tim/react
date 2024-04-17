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
            <span className="mobile">{won}</span>
            <span className="mobile">{lost}</span>
            <span className="mobile">{draw}</span>
            <span className="mobile">{goals}</span>
            <span className="mobile">{opponentGoals}</span>
            <span>{goaldiff}</span>
        </div>


    )
}
