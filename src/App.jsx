import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // <-- අපි හදපු Hero Component එක මෙතනින් ගන්නවා
import TechStack from './components/TechStack';
import DemoList from './components/DemoList';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './styles/App.css';

// Existing Demos
import ChatbotDemo from './demos/ChatbotDemo';
import WriterDemo from './demos/WriterDemo';
import PlannerDemo from './demos/PlannerDemo';

// NEW Mobile App Demos
import EduAppDemo from './demos/EduAppDemo';
import DoctorAppDemo from './demos/DoctorAppDemo';

// Main Portfolio Layout
const PortfolioLayout = ({ onDemoClick }) => {
  return (
    <>
      <Navbar />
      
      {/* මෙතන තිබ්බ දිග HTML කෝඩ් එක අයින් කරා.
         ඒ වෙනුවට අපි හදපු Hero Component එක දැම්මා.
         දැන් Background Images මාරු වෙන එක සහ 3D Animation එක මේක ඇතුලේ වැඩ කරයි.
      */}
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
  const [activeDemo, setActiveDemo] = useState(null);

  const handleDemoClick = (demo) => {
    if (demo.type === 'external') {
      window.open(demo.url, '_blank', 'noopener,noreferrer');
    } else {
      setActiveDemo(demo.id);
      window.scrollTo(0, 0); // Scroll to top
    }
  };

  const handleBackToPortfolio = () => {
    setActiveDemo(null);
  };

  const renderContent = () => {
    switch (activeDemo) {
      // New Mobile Apps
      case 'eduapp':
        return <EduAppDemo onBack={handleBackToPortfolio} />;
      case 'doctorapp':
        return <DoctorAppDemo onBack={handleBackToPortfolio} />;
        
      // Existing AI Demos
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