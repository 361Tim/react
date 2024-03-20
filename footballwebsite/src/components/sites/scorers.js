import React from "react";
import Button from "../atoms/button";
import Playerdata from "../molecules/Playerdata";


export default function Players() {
    return (
        <div>
            <Button to="/" name="<-back" />
            <Playerdata />
        </div>
    );
}