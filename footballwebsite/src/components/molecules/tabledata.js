import React, { useEffect, useState } from 'react'
import Gridtemplate from "../atoms/gridtemplate";

export default function Tabledata() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl2/2022").then
            (res => res.json().then(data => {

                setTeams(data);

            }))
    }, [])
    return (
        <div>

            <div>
                {teams.map((element, Index) => {
                    return <Gridtemplate place={Index + 1} teamName={element.teamName} teamIconUrl={element.teamIconUrl} points={element.points} matches={element.matches} won={element.won} lost={element.lost} draw={element.draw} opponentGoals={element.opponentGoals} goals={element.goals} goaldiff={element.goalDiff} />
                })}
            </div>


        </div >

    );
}


