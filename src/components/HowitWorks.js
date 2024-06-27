import React from 'react';
import './HowitWorks.css';

const HowitWorks = () => {
  return (
    <div className="how-it-works">
      <h1>How it works</h1>
      <p>AirForShare (AFS) is an easy solution to share files, text, and links within the same Wi-Fi Network.</p>
      <div className="steps">
        <div className="step">
          <h2>1.</h2>
          <p>Connect all your devices to the <strong>same Wi-Fi network</strong></p>
        </div>
        <div className="step">
          <h2>2.</h2>
          <p><strong>Upload</strong> to AirForShare anything you want</p>
        </div>
        <div className="step">
          <h2>3.</h2>
          <p>View and manage from <strong>any devices *</strong></p>
        </div>
      </div>
      <p className="note">* your content is automatically deleted after 30 minutes since last access</p>
    </div>
  );
}

export default HowitWorks;
