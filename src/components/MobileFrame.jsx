import React from 'react';
import { FaWifi, FaBatteryFull, FaSignal, FaChevronLeft } from 'react-icons/fa';
import '../styles/MobileDemo.css';

const MobileFrame = ({ children, appName, onBack, themeColor = '#000' }) => {
  return (
    <div className="mobile-wrapper">
      {/* PC Only Header */}
      <div className="pc-controls">
        <button onClick={onBack} className="back-btn-pc">
          <FaChevronLeft /> Back to Portfolio
        </button>
        <div className="app-badge" style={{backgroundColor: themeColor}}>
          Running: {appName}
        </div>
      </div>

      <div className="phone-body">
        {/* Notch & Sensors */}
        <div className="notch-container">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>

        {/* Power & Volume Buttons */}
        <div className="btn-power"></div>
        <div className="btn-vol-up"></div>
        <div className="btn-vol-down"></div>

        <div className="screen-display">
          {/* Status Bar */}
          <div className="status-bar" style={{color: themeColor === '#000' ? '#fff' : '#000'}}>
            <span className="time">9:41</span>
            <div className="icons">
              <FaSignal /> <FaWifi /> <FaBatteryFull />
            </div>
          </div>

          {/* Actual App Content */}
          <div className="app-content">
            {children}
          </div>

          {/* Home Indicator */}
          <div className="home-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;