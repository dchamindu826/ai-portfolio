// src/App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import DemoList from './components/DemoList';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './styles/App.css';

// Import your internal demo components
import ChatbotDemo from './demos/ChatbotDemo';
import WriterDemo from './demos/WriterDemo';
import PlannerDemo from './demos/PlannerDemo';

// Main portfolio layout eka wenama component ekak widihata hadamu
const PortfolioLayout = ({ onDemoClick }) => {
  return (
    <>
      <Hero />
      <TechStack />
      <DemoList onDemoClick={onDemoClick} />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
};

function App() {
  const [activeDemo, setActiveDemo] = useState(null); // 'null' means show portfolio

  const handleDemoClick = (demo) => {
    if (demo.type === 'external') {
      // External link eka aluth tab ekakin open karamu
      window.open(demo.url, '_blank', 'noopener,noreferrer');
    } else {
      // Internal demo eke ID eka state ekata set karamu
      setActiveDemo(demo.id);
    }
  };

  const handleBackToPortfolio = () => {
    setActiveDemo(null); // State eka null karama ayeth portfolio eka pennanawa
  };

  // State eka anuwa hari component eka pennana function eka
  const renderContent = () => {
    switch (activeDemo) {
      case 'chatbot':
        return <ChatbotDemo onBack={handleBackToPortfolio} />;
      case 'writer':
        return <WriterDemo onBack={handleBackToPortfolio} />;
      case 'planner':
        return <PlannerDemo onBack={handleBackToPortfolio} />;
      default:
        return <PortfolioLayout onDemoClick={handleDemoClick} />;
    }
  };

  return (
    <div className="App">
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;