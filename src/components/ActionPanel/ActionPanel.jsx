import React from 'react';
import './ActionPanel.css';

const ActionPanel = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Ask Catura</h1>
        <div className="header-actions">
          <button>WhatsApp</button>
          <button>Greetings</button>
        </div>
      </header>

      <section className="greeting-section">
        <div className="greeting-template">
          <p>Greeting Template</p>
          <div className="greeting-actions">
            <button>Copy to Send</button>
            <button>Preview</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          className="message-input"
        />
        <button className="send-button">➤</button>
      </section>

      <section className="action-launcher">
        <h2>Action Launcher</h2>
        <div className='launcher-content'>
        <input type="text" placeholder="Search actions..." />
        <div className="actions">
          <div>Add Action</div>
          <div>Fee Reversal</div>
          <div>Retail Onboarding</div>
          <div>Address Update</div>
        </div>
        </div>
      </section>

      <section className="case-favorite">
        <h2>Case Favorite</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur. Et tincidunt</li>
          <li>Photo</li>
          <li>Lorem ipsum dolor sit amet consectetur. Et tincidunt</li>
        </ul>
      </section>
    </div>
  );
};

export default ActionPanel;