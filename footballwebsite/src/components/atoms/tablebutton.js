import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button() {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate("/table")
        }}>Tabelle</div>


    )
}