// src/components/DemoList.jsx
import React from 'react';
import DemoCard from './DemoCard';
import styles from './DemoList.module.css';
import { FaRobot, FaPenFancy, FaMapMarkedAlt, FaRoute, FaReceipt, FaShoppingCart } from 'react-icons/fa';

// Demo data tika aluth system ekata update karamu
const demoData = [
  // Hadanna thiyena demo 3 (Internal)
  { id: 'chatbot', type: 'internal', title: 'AI Customer Chatbot', description: 'Handles customer queries 24/7, improving user satisfaction and engagement.', icon: <FaRobot /> },
  { id: 'writer', type: 'internal', title: 'AI Product Description Writer', description: 'Generates compelling, SEO-friendly product descriptions to boost online sales.', icon: <FaPenFancy /> },
  { id: 'planner', type: 'internal', title: 'AI Travel Planner', description: 'Creates personalized travel itineraries based on user preferences and budget.', icon: <FaMapMarkedAlt /> },
  
  // Hadala iwara demo 3 (External)
  { id: 'delivery', type: 'external', url: 'https://www.rapidgo.lk/', title: 'AI Delivery Route Optimizer', description: 'Calculates the most efficient routes for multi-stop deliveries, saving time and fuel.', icon: <FaRoute /> },
  { id: 'finance', type: 'external', url: 'https://jeans-admin-panel.vercel.app/', title: 'AI Financial Categorizer', description: 'Automatically categorizes financial statements for easy budget management.', icon: <FaReceipt /> },
  { id: 'ecommerce', type: 'external', url: 'https://e-commerce-six-lime.vercel.app/', title: 'AI E-commerce Recommender', description: 'Suggests products to users based on their browsing and purchase history.', icon: <FaShoppingCart /> }
];

const DemoList = ({ onDemoClick }) => { // onDemoClick function eka props walin ganna
  return (
    <div className={styles.demoSection}>
      <h2 className={styles.sectionTitle}>My AI-Powered Demos</h2>
      <div className={styles.demoGrid}>
        {demoData.map((demo) => (
          <DemoCard 
            key={demo.id} 
            demo={demo} // Sampurna demo object ekama pass karamu
            onClick={onDemoClick} // App.jsx eken ena function eka pass karamu
          />
        ))}
      </div>
    </div>
  );
};

export default DemoList;