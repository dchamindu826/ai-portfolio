// src/components/DemoCard.jsx
import React from 'react';
import styles from './DemoCard.module.css';

const DemoCard = ({ demo, onClick }) => {
  const { icon, title, description } = demo;

  return (
    <div className={styles.card}>
      <div className={styles.cardIconContainer}>
        <div className={styles.cardIcon}>{icon}</div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {/* Button eka click karama, props walin ena function eka call karamu */}
      <button className={styles.demoButton} onClick={() => onClick(demo)}>
        Explore Demo
      </button>
    </div>
  );
};

export default DemoCard;