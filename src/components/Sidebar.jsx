/// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-md-2 bg-dark text-white vh-100">
      <h1 className="text-center py-4">Jee1</h1>
      <ul className="nav flex-column px-3">
        <li className="nav-item py-2">
          <a href="#" className="nav-link text-white">
            Overview
          </a>
        </li>
        <li className="nav-item py-2">
          <a href="#" className="nav-link text-white">
            Order Management
          </a>
        </li>
        <li className="nav-item py-2">
          <a href="#" className="nav-link text-white">
            Distributor List
          </a>
        </li>
        <li className="nav-item py-2">
          <a href="#" className="nav-link text-white">
            Product Management
          </a>
        </li>
        <li className="nav-item py-2">
          <a href="#" className="nav-link text-white">
            Profile Settings
          </a>
        </li>
        <li className="nav-item py-2">
          <a href="#" className="nav-link text-white">
            Help
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
