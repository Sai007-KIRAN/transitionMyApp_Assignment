import React, { useState } from "react";
import "./Escalate.css";

const Escalate = () => {
  const [activeTab, setActiveTab] = useState("Conversation");

  const tabs = [
    { label: "Conversation", isCloseable: false },
    { label: "Address Update", isCloseable: true },
    { label: "Fee Reversal", isCloseable: true },
    { label: "Retention", isCloseable: true },
  ];

  const handleCloseTab = (label) => {
    const updatedTabs = tabs.filter((tab) => tab.label !== label);
    setActiveTab(updatedTabs[0]?.label || ""); 
  };

  return (
    <div className="conversation-section">
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === tab.label ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
            {tab.isCloseable && (
              <span
                className="close-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseTab(tab.label);
                }}
              >
                ✖
              </span>
            )}
          </div>
        ))}
        <button className="escalate-button">Escalate</button>
      </div>
    </div>
  );
};

export default Escalate;