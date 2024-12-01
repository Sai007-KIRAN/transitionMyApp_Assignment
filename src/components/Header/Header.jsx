import React from "react";
import "./Header.css"; 
import img from "./img.jpeg"

const Header = () => {
  return (
    <div className="header">

      <div className="header-left">
        <p className="breadcrumb">Chat / Feed chat</p>
      </div>

      <div className="header-right">
        <button className="role-button process-owner">Process Owner HOD</button>
        <button className="role-button admin">Admin</button>
        <div className="user-details">
          <img
            src={img}
            alt="User"
            className="profile-picture"
          />
          <span className="username">Palak Bansal</span>
        </div>
        <span className="icon settings">⚙️</span>
        <span className="icon logout">🔁 Logout</span>
      </div>
    </div>
  );
};

export default Header;