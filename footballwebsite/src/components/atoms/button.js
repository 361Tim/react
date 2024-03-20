import React from 'react'
import { useNavigate } from 'react-router-dom'
import './button.css';
export default function Button({ to, name }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => {
                navigate(to);
            }
            }
        >
            {name}
        </div>
    )


}
