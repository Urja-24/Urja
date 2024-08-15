import React, { useState, useEffect } from 'react';
import '../CSS/TopHeader.css'; // Optional: For custom styling

const TopHeader = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header className={`top-header ${scrollingUp ? 'visible' : 'hidden'}`}>
      <div className="top-header-content flex gap-10 justify-end pr-10 text-xl my-2 text-white">
        <button className="logo">
          Logo
        </button>
        <div className="user-section flex gap-10">
          <button className="user-icon">?</button>
          <button className="user-name">User</button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

