import React from "react";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <div className="sidebar-left">
      <div className="filter-section">
        <h3>Size - UK/India</h3>
        {[6, 7, 8, 9, 10].map((size) => (
          <label>
            <input type="checkbox" /> {size}
          </label>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;   