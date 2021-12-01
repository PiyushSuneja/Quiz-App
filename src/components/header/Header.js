import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export default function Header(){
    return(
        <div className="header">
            <Link to="/" className="title" >Welcome to QUIZ</Link>
            <hr className="divider"></hr>
        </div>
    )
}