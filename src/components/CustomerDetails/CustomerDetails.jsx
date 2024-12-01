import React from "react";
import "./CustomerDetails.css";

const CustomerDetails = () => {
  const customerData = {
    name: "Hannibal Smith",
    address: "1 Market Street San Francisco, CA 94105",
    details: [
      { label: "Customer ID", value: "12345" },
      { label: "Email Address", value: "rachel@sample.com" },
      { label: "Phone Number", value: "8051298905" },
    ],
    loyalty: [
      { label: "Loyalty Tier", value: "Silver" },
      { label: "Segment", value: "Sleepy Customer" },
    ],
    stats: [
      { label: "Lifetime Value", value: "$1M" },
      { label: "Propensity to Purchase", value: "75%", icon: "🟡" },
      { label: "Engagement Score", value: "80%", icon: "🟢" },
    ],
  };

  return (
    <div className="profile-container">

      <div className="profile-header">
        <div className="profile-avatar">CB</div>
        <div>
          <h2>{customerData.name}</h2>
          <p>{customerData.address}</p>
        </div>
      </div>

      <div className="all-details">
      {customerData.details.map((detail, index) => (
        <div key={index} className="detail-section">
          <div className="detail-item">
            <span>{detail.label}</span>
            <strong>{detail.value}</strong>
          </div>
          <button className="action-menu">⋮</button>
        </div>
      ))}
      <button className="add-button">+ Add</button>
      </div>

      <div className="all-details">
      {customerData.loyalty.map((item, index) => (
        <div key={index} className="detail-section">
          <div className="detail-item">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
          <button className="action-menu">⋮</button>
        </div>
      ))}
      <button className="add-button">+ Add</button>
      </div>

      <div className="all-details">
      {customerData.stats.map((stat, index) => (
        <div key={index} className="detail-section">
          <div className="detail-item">
            <span>{stat.label}</span>
            <strong>
              {stat.icon && <span className="stat-icon">{stat.icon}</span>}{" "}
              {stat.value}
            </strong>
          </div>
          <button className="action-menu">⋮</button>
        </div>
      ))}
      <button className="add-button">+ Add</button>
      </div>

      <button className="assign-button">Assign other Agent</button>
      <button className="add-widget-button">Add New Widget</button>
    </div>
  );
};

export default CustomerDetails;