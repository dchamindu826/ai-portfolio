// src/components/HeroAnimation.jsx
import React, { useState } from 'react';
import '../styles/HeroAnimation.css';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiTensorflow } from 'react-icons/si';

const HeroAnimation = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Mouse එක යන පැත්තට 3D හැරෙන්න හදන ගණිතය
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const xRotation = ((mouseY - height / 2) / height) * 30; // Max 30 deg rotation
    const yRotation = ((mouseX - width / 2) / width) * 30;

    setRotation({ x: -xRotation, y: yRotation });
  };

  return (
    <div className="hero-anim-container" onMouseMove={handleMouseMove}>
      <div 
        className="scene" 
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        {/* මැද තියෙන Core එක */}
        <div className="core"></div>

        {/* Ring 1 (Small) */}
        <div className="orbit orbit-1">
          <div className="tech-planet pos-1" style={{color: '#61DAFB'}}><FaReact /></div>
          <div className="tech-planet pos-2" style={{color: '#68A063'}}><FaNodeJs /></div>
        </div>

        {/* Ring 2 (Medium - Tilted) */}
        <div className="orbit orbit-2" style={{border: '1px dashed rgba(236, 72, 153, 0.3)'}}>
           <div className="tech-planet pos-3" style={{color: '#47A248'}}><SiMongodb /></div>
           <div className="tech-planet pos-4" style={{color: '#FF9900'}}><FaAws /></div>
        </div>

        {/* Ring 3 (Large) */}
        <div className="orbit orbit-3">
           <div className="tech-planet pos-1" style={{color: '#FF6F00'}}><SiTensorflow /></div>
           <div className="tech-planet pos-3" style={{color: '#3776AB'}}><FaPython /></div>
           <div className="tech-planet pos-2" style={{color: '#0db7ed'}}><FaDocker /></div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;