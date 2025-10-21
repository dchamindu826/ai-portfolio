// src/components/TechStack.jsx
import React from 'react';
import styles from './TechStack.module.css';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiMongodb } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <FaDocker /> },
];

const TechStack = () => {
    return (
        <div className={styles.stackSection}>
            <h2 className={styles.sectionTitle}>Technologies I Use</h2>
            <div className={styles.stackGrid}>
                {skills.map(skill => (
                    <div key={skill.name} className={styles.skillCard}>
                        <div className={styles.skillIcon}>{skill.icon}</div>
                        <p className={styles.skillName}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;