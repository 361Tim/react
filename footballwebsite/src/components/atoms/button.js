import React from 'react'
import { Link } from 'react-router-dom'
import './button.css';
export default function Button({ to, name }) {
    return <Link to={to}>{name}</Link>;



}