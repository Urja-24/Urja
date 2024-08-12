// TopHeader.jsx
import React from 'react';
import '../CSS/TopHeader.css'; // Optional: For custom styling

const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="top-header-content flex gap-7 justify-end pr-10 text-xl my-2">
        <div className="logo">
         Logo
        </div>
        <div className="user-section flex gap-7">
          <span className="user-icon">?</span>
          <span className="user-name">User</span>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
