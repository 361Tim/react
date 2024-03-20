import React from 'react'
import './scorergrid.css'

export default function Playergrid({ place, playerName, goalcount }) {
    return (
        <div className='playercontainer'>
            <span>Platz</span>
            <span>Name</span>
            <span>Tore</span>
            <span>{place}</span>
            <span>{playerName}</span>
            <span>{goalcount}</span>
        </div>
    )
}
