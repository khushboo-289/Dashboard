// Topbar.js
import React from "react";

const Topbar = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Search for article, video or document"
      />
      <div className="d-flex align-items-center">
        <i className="bi bi-bell mx-3"></i>
        <i className="bi bi-person-circle"></i>
      </div>
    </header>
  );
};

export default Topbar;
