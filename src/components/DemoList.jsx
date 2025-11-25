import React from 'react';
import styles from './DemoList.module.css';
import { 
  FaRobot, FaPenFancy, FaMapMarkedAlt, FaRoute, 
  FaGraduationCap, FaUserMd, FaArrowRight 
} from 'react-icons/fa';

const demoData = [
  { 
    id: 'eduapp', 
    type: 'internal', 
    title: 'EduLanka LMS App', 
    description: 'A complete mobile learning platform with live Zoom classes, video recordings, and secure material downloads.', 
    icon: <FaGraduationCap /> 
  },
  { 
    id: 'doctorapp', 
    type: 'internal', 
    title: 'MediConnect Channeling', 
    description: 'Doctor appointment booking system with specialist search, reviews, and digital health records.', 
    icon: <FaUserMd /> 
  },
  { id: 'chatbot', type: 'internal', title: 'AI Customer Chatbot', description: 'Handles customer queries 24/7, improving user satisfaction and engagement.', icon: <FaRobot /> },
  { id: 'writer', type: 'internal', title: 'AI Product Description Writer', description: 'Generates compelling, SEO-friendly product descriptions to boost online sales.', icon: <FaPenFancy /> },
  { id: 'planner', type: 'internal', title: 'AI Travel Planner', description: 'Creates personalized travel itineraries based on user preferences and budget.', icon: <FaMapMarkedAlt /> },
  { id: 'delivery', type: 'external', url: 'https://www.rapidgo.lk/', title: 'AI Delivery Route Optimizer', description: 'Calculates the most efficient routes for multi-stop deliveries, saving time and fuel.', icon: <FaRoute /> },
];

const DemoList = ({ onDemoClick }) => {
  return (
    // මෙන්න මෙතන ID එක වෙනස් කරා "projects" කියලා
    <div className={styles.demoSection} id="projects">
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.demoGrid}>
        {demoData.map((demo) => (
          <div key={demo.id} className={styles.card} onClick={() => onDemoClick(demo)}>
            <div className={styles.cardIconContainer}>
              {demo.icon}
            </div>
            <h3 className={styles.cardTitle}>{demo.title}</h3>
            <p className={styles.cardDescription}>{demo.description}</p>
            
            <button className={styles.demoButton}>
              Explore Demo <FaArrowRight style={{fontSize:'0.8em'}}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoList;