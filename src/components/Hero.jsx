// src/components/Hero.jsx
import React from 'react';
import HeroAnimation from './HeroAnimation';
import ParticleBackground from './ParticleBackground';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      
      {/* No Lines, Just Dust */}
      <ParticleBackground />

      <div className={styles.centerContainer}>
        
        {/* New Stylish Badge */}
        <div className={styles.availabilityBadge}>
            <div className={styles.pulseDot}></div>
            <span className={styles.badgeText}>Available for New Projects</span>
        </div>

        <h1 className={styles.heroTitle}>
            Designing the <br/>
            <span className={styles.gradientText}>Future of Web</span>
        </h1>

        <p className={styles.heroSubtitle}>
            I build high-performance, AI-driven applications that look beautiful and work flawlessly.
        </p>

        <div className={styles.animationWrapper}>
            <HeroAnimation />
        </div>

        <div className={styles.btnGroup}>
             <a href="#projects" className={styles.btnPrimary}>Explore Work</a>
             <a href="https://www.fiverr.com/designportal_" target="_blank" rel="noreferrer" className={styles.btnSecondary}>Contact Me</a>
        </div>

      </div>
    </section>
  );
};

export default Hero;