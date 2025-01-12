import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './SiteLayout/Layout';
import GrowingParallelTrail from './GrowingParallelTrail';

function App() {
  const [isAllowedView, setIsAllowedView] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktopView = window.innerWidth >= 1440; // Check if width is >= 1600px
      setIsAllowedView(isDesktopView);

      if (!isDesktopView) {
        document.body.classList.add('block-view'); // Block interaction
      } else {
        document.body.classList.remove('block-view'); // Allow interaction
      }
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!isAllowedView) {
    return (
      <div className="non-desktop-message">
        <h1>Desktop Only</h1>
        <p>This website is optimized for screen widths of 1600px or larger. Please resize your browser or switch to a larger screen.</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Custom cursor trail effect */}
      <GrowingParallelTrail />

      {/* Main site layout */}
      <Layout />
    </div>
  );
}

export default App;
