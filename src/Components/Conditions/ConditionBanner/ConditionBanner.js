import React from 'react';
import './ConditionBanner.css';

const ConditionBanner = () => {
  return (
    <div className="condition-banner">
      <div className="overlay"></div> {/* Overlay layer */}
      <div className="overlay-content">
        <h1>Conditions We Treat</h1>
        <div className="breadcrumb">
          <span>Home</span> <span>&gt;</span> <span>Conditions We Treat</span>
        </div>
      </div>
    </div>
  );
}

export default ConditionBanner;
