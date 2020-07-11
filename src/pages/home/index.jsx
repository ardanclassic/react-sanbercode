import React from 'react';
import './style.scss';

export default function index() {
    const avatar = `https://avatars.dicebear.com/api/male/ardan.svg`;
    return (
        <div className="home-area">
            <div className="img-area">
                <img src={avatar} alt="avatar"/>
            </div>
            <h1>Hello, there!</h1>
            <p>
                This is me, Ardan! You are free to play around, checking something, 
                or whatever from this site. Hope it can give you some informations. You can
                also reach my other site below:
            </p>
            <div className="sites">
                <a href="https://indocovid.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div>indocovid</div>
                </a>
                <a href="https://prophetnoah.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div>prophetnoah</div>
                </a>
                <a href="https://liverpool-info.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div>liverpool</div>
                </a>
            </div>
            <h2>Thank you for visiting me!</h2>
        </div>
    )
}
