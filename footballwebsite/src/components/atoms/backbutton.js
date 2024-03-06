import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Back() {
    const navigate = useNavigate()
    return (
        <div onClick={() => {
            navigate("/")
        }}>zurueck</div>


    )
}