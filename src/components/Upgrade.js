import React from 'react';
import './Upgrade.css';
import { Link } from 'react-router-dom';

function Upgrade() {
  return (
    <div className="upgrade-container">
      <h2>Welcome to AirForShare!</h2>
      <p>As a registered user, you can:</p>
      <div className="benefits">
        <div className="benefit">
          <img src="path/to/upload-icon.png" alt="Upload Icon" />
          <p>Upload up to <strong>5 files at once</strong></p>
        </div>
        <div className="benefit">
          <img src="path/to/attach-icon.png" alt="Attach Icon" />
          <p>Attach up to <strong>10Mb per file</strong></p>
        </div>
        <div className="benefit">
          <img src="path/to/store-icon.png" alt="Store Icon" />
          <p>Store your files up to <strong>30 mins.</strong></p>
        </div>
      </div>
      <Link to="/signup">
        <button className="create-account-btn">Create Free Account</button>
      </Link>
      <p className="more-info">Get even more starting from $0.99/mo</p>
      <div className="benefits">
        <div className="benefit">
          <img src="path/to/upload-icon.png" alt="Upload Icon" />
          <p>Upload <strong>unlimited</strong> number of files</p>
        </div>
        <div className="benefit">
          <img src="path/to/attach-icon.png" alt="Attach Icon" />
          <p>Attach <strong>unlimited</strong> sizes</p>
        </div>
        <div className="benefit">
          <img src="path/to/store-icon.png" alt="Store Icon" />
          <p>Store your files up to <strong>2 hours</strong></p>
        </div>
      </div>
      <Link to="/signup">
        <button className="create-account-btn">Subscribe Now</button>
      </Link>
      <p>Cancel anytime</p>
    </div>
  );
}

export default Upgrade;
