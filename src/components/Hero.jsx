// src/components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

// Import your 4 hero background images
import heroBg1 from '../assets/hero-bg-1.jpg';
import heroBg2 from '../assets/hero-bg-2.jpg';
import heroBg3 from '../assets/hero-bg-3.jpg';
import heroBg4 from '../assets/hero-bg-4.jpg';

const Hero = () => {
    return (
        // Pass the imported images as CSS custom properties
        <div 
            className={styles.heroContainer}
            style={{
                '--hero-bg-1': `url(${heroBg1})`,
                '--hero-bg-2': `url(${heroBg2})`,
                '--hero-bg-3': `url(${heroBg3})`,
                '--hero-bg-4': `url(${heroBg4})`,
            }}
        >
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Building the Next Generation of Intelligent Applications
                </h1>
                <p className={styles.heroSubtitle}>
                    I specialize in creating custom AI-powered solutions that are not just smart, but are also intuitive, efficient, and designed to drive business growth.
                </p>
                <a href="https://www.fiverr.com/designportal_?public_mode=true" target="_blank" rel="noopener noreferrer" className={styles.heroButton}>
                    Let's Collaborate
                </a>
            </div>
        </div>
    );
};

export default Hero;