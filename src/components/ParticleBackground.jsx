// src/components/ParticleBackground.jsx
import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.opacity = Math.random() * 0.5 + 0.1; // Random opacity
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.globalAlpha = this.opacity; // Set transparency
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1; // Reset alpha
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      // Particles ගාන අඩු කරා පිරිසිදු පෙනුමක් එන්න
      let numberOfParticles = (canvas.height * canvas.width) / 15000; 
      
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5; // පොඩි size
        let x = Math.random() * (innerWidth - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2) + size * 2;
        let directionX = (Math.random() * 0.4) - 0.2; // හෙමින් යන්න හැදුවා
        let directionY = (Math.random() * 0.4) - 0.2;
        
        // පාට 2ක් මිශ්‍ර කරා (නිල් සහ සුදු)
        let color = Math.random() > 0.5 ? '#6366f1' : '#a5b4fc'; 

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      // පරණ ෆ්‍රේම් එක මකනවා (Trails නැති වෙන්න)
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    init();
    animate();

    return () => {
        window.removeEventListener('resize', () => {});
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#020617' }} />;
};

export default ParticleBackground;