import React from "react";
import Button from "../atoms/button";
import Tabledata from "../molecules/tabledata";
import Header from "../atoms/header";
import './table.css'

export default function Table() {
    return (
        <div>
            <Button to="/" name="<-back" />
            <div className="header"><Header row1="Verein" row2="Wappen" row3="Punkte" row4="Spiele" row5="S" row6="U" row7="N" row8="Gegentore" row9="Tore" row10="Tordifferenz" /></div>
            <Tabledata />
        </div>
    );
}

