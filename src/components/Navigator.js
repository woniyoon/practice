import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator(){
    return (
        <ul className="navMenu">
            <li>
                <Link to="/">MAIN</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/works">WORKS</Link>
            </li>
        </ul>
    );
}

export default Navigator;