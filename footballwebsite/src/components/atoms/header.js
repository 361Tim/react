import React from "react";

export default function Header({ row1, row2, row3, row4, row5, row6, row7, row8, row9, row10 }) {
    return (
        <div className="header">
            <span>{row1}</span>
            <span>{row2}</span>
            <span>{row3}</span>
            <span>{row4}</span>
            <span>{row5}</span>
            <span>{row6}</span>
            <span>{row7}</span>
            <span>{row8}</span>
            <span>{row9}</span>
            <span>{row10}</span>
        </div>
    )
}

