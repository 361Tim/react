import React, { useEffect, useState } from 'react'
import Gridtemplate from "../atoms/gridtemplate";

export default function Tabledata() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl2/2022").then
            (res => res.json().then(data => {
                console.log(data);
                setTeams(data);

            }))
    }, [])
    return (
        <div>

            <div>
                {teams.map(element => {
                    return <Gridtemplate teamName={element.teamName} teamIconUrl={element.teamIconUrl} points={element.points} matches={element.matches} won={element.won} lost={element.lost} draw={element.draw} opponentGoals={element.opponentGoals} goals={element.goalDiff} goaldiff={element.goalDiff} />
                })}
            </div>


        </div >

    );
}


