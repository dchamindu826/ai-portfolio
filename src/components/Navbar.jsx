import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll කරද්දී Navbar එකේ පාට වෙනස් වෙන්න
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        
        {/* Logo */}
        <div className={styles.logo}>
          Design<span>Portal</span>.
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className={styles.navLinks}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#tech">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="https://www.fiverr.com/designportal_" target="_blank" rel="noreferrer" className={styles.hireBtn}>Hire Me</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ''}`}>
        <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#tech" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="https://www.fiverr.com/designportal_" target="_blank" rel="noreferrer" className={styles.mobileHireBtn}>Hire Me</a>
      </div>
    </nav>
  );
};

export default Navbar;