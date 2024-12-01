
import React from "react";
import "./Sidebar.css"; 
import image from "./image.png"

const Sidebar = () => {
  const menuItems = [
    { icon: "📄", label: "Internal Audit" },
    { icon: "📄", label: "UAT Testing" },
    { icon: "🔗", label: "Intract" },
    { icon: "👤", label: "Queue"},
    { icon: "🛠️", label: "Workflow" },
    { icon: "👤", label: "Admin" },
    { icon: "📦", label: "Asset" },
    { icon: "👨‍👩‍👦", label: "Parent", submenu: ["Option One", "Option Two"] },
    { icon: "⚙️", label: "All Accessories" },
    { icon: "⭐", label: "Decorating" },
    { icon: "📦", label: "Presenting" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={image}
          alt="Risk Hawk Logo"
          className="logo"
        />
        <p className="tagline">Manage your exposures</p>
      </div>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`menu-item ${item.active ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
            {item.submenu && <span className="submenu-icon">▶</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;