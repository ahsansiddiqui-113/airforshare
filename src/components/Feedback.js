import React from 'react';
import './Feedback.css';

function Feedback() {
  return (
    <div className="feedback-container">
      <h2>Share your experience</h2>
      <form>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" placeholder="Enter your email address" />
        <label htmlFor="feedback">FEEDBACK</label>
        <textarea id="feedback" placeholder="Type here"></textarea>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
