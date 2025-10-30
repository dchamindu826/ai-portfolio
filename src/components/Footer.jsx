// src/components/Footer.jsx (The Corrected Version)
import React from 'react';
import styles from './Footer.module.css';

// CHANGE 1: Import from two different libraries to get the correct icons
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si'; // The correct library for the Fiverr brand icon

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} Design-Portal. All Rights Reserved.</p>
                <div className={styles.socialLinks}>
                    {/* CHANGE 2: Use the new SiFiverr icon component */}
                    <a href="https://www.fiverr.com/designportal_?public_mode=true" target="_blank" rel="noopener noreferrer"><SiFiverr /></a>
                    <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/dchamindu826" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;