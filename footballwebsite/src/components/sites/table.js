import React from "react";
import Button from "../atoms/button";
import Tabledata from "../molecules/tabledata";
import "../atoms/gridstyle.css"


export default function Table() {
    return (
        <div>
            <Button to="/" name="<-back" />
            <div className="teamscontainer">
                <span>Platzierung</span>
                <span>Verein</span>
                <span>Wappen</span>
                <span>Spiele</span>
                <span>Punkte</span>
                <span>S</span>
                <span>U</span>
                <span>N</span>
                <span>Tore</span>
                <span>Gegentore</span>
                <span>Tordifferenz</span>
            </div>
            <Tabledata />

        </div>
    );
}

