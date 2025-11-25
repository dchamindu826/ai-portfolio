import React from 'react';
import styles from './TechStack.module.css';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTensorflow, SiMongodb, SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

// Skills godak thiyena nisa lassanata penawa
const skills = [
    { name: 'React', icon: <FaReact color="#61DAFB"/> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933"/> },
    { name: 'Python', icon: <FaPython color="#3776AB"/> },
    { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00"/> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248"/> },
    { name: 'AWS', icon: <FaAws color="#FF9900"/> },
    { name: 'Docker', icon: <FaDocker color="#2496ED"/> },
    { name: 'Next.js', icon: <SiNextdotjs color="#fff"/> },
    { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4"/> },
    { name: 'Firebase', icon: <SiFirebase color="#FFCA28"/> },
];

const TechStack = () => {
    // Scroll eka smooth wenna array eka 2 parak duplicate karanawa
    const duplicatedSkills = [...skills, ...skills];

    return (
        <div className={styles.stackSection}>
            <h2 className={styles.sectionTitle}>Technologies I Use</h2>
            
            <div className={styles.slider}>
                <div className={styles.slideTrack}>
                    {duplicatedSkills.map((skill, index) => (
                        <div key={index} className={styles.skillCard}>
                            <div className={styles.skillIcon}>{skill.icon}</div>
                            <p className={styles.skillName}>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;