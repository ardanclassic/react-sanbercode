import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
    const location = useLocation().pathname.substr(1);
    const activeLink = (path) => location === path ? 'active' : null;
    const [ sidenav, setSidenav ] = useState('0%');
    return (
        <div className="navbar" data-test="navbar">
            <div className="title" data-test="logo-title">The Final</div>

            <span className="burger-menu" onClick={ () => setSidenav("100%") }>&#9776;</span>
            
            {/* mobile menu */}
            <div className="sidenav" style={{ width: sidenav }}>
                <p>
                    <Link onClick={ () => setSidenav("0%") } 
                        className={ activeLink("") } to="/">Home</Link>
                </p>
                <p>
                    <Link onClick={ () => setSidenav("0%") } 
                        className={ activeLink("about")} to="/about">Corona Info</Link>
                </p>
                <p>
                    <Link onClick={ () => setSidenav("0%") } 
                        className={ activeLink("topic")} to="/topic">Converter</Link>
                </p>
                <div className="closebtn" onClick={ () => setSidenav("0%") }>&times;</div>
            </div>

            {/* desktop menu */}
            <ul data-test="list-menu">
                <li>
                    <Link className={ activeLink("") } to="/">Home</Link>
                </li>
                <li>
                    <Link className={ activeLink("about")} to="/about">Corona Info</Link>
                </li>
                <li>
                    <Link className={ activeLink("topic")} to="/topic">Converter</Link>
                </li>
            </ul>
        </div>
    )
}