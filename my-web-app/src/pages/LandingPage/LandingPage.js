import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade out after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container">
      <h1 className={`hello-text ${fadeOut ? 'fade-out' : ''}`}>Hello</h1>
    </div>
  );
};

export default LandingPage;
