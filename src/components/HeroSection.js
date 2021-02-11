import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="videos/video-1.mp4" autoPlay loop muted/>
            <h1>Przygoda czeka!</h1>
            <p>Na co jeszce czekasz?!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Zaczynajmy!</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Zobacz zwiastun! <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    );
}

export default HeroSection;