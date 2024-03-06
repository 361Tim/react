import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Scorebutton() {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            navigate("/scorers")
        }}>Torschützen</div>


    )
}