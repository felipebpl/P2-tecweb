import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>PROJETO 2 TECWEB</h1>
      <p>FELIPE LEMOS</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SE INSCREVER
        </Button>

        <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        onClick={console.log('hey')}
      >
        VER MINHA LISTA <i className='far fa-play-circle' />
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;