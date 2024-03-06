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

}
return (
    <div>
        <div>
            {team.map(element => {
                return <Gridtemplate teamName={element.name} />
            })}
        </div>


    </div >

);

