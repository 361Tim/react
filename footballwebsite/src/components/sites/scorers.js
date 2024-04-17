import React from "react";
import Button from "../atoms/button";
import Playerdata from "../molecules/Playerdata";


export default function Players() {
    return (
        <div>
            <div className="scorerback"><Button to="/" name="<-back" /></div>
            <Playerdata />
        </div>
    );
}