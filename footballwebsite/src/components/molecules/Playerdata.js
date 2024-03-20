import React, { useEffect, useState } from 'react';
import Playergrid from '../atoms/scorergrid';

export default function Playerdata() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch("https://api.openligadb.de/getgoalgetters/bl2/2022")
            .then(res => res.json())
            .then(data => {
                setPlayers(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div>
            <div>
                {players.map((element, Index) => (
                    <Playergrid place={Index + 1} playerName={element.goalGetterName} goalcount={element.goalCount} />
                ))}
            </div>
        </div>
    );
}
