import React from "react";
import Button from "../atoms/button";
import Tabledata from "../molecules/tabledata";
import "../atoms/gridstyle.css"


export default function Table() {
    return (
        <div>
            <div className="tableback"><Button to="/" name="<-back" /></div>
            <div className="teamscontainer">
                <span>Platzierung</span>
                <span>Verein</span>
                <span>Wappen</span>
                <span>Spiele</span>
                <span>Punkte</span>
                <span className="mobile">S</span>
                <span className="mobile">U</span>
                <span className="mobile">N</span>
                <span className="mobile">Tore</span>
                <span className="mobile">Gegentore</span>
                <span>Tordifferenz</span>
            </div>
            <Tabledata />

        </div>
    );
}

