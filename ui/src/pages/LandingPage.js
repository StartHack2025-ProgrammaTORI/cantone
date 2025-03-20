import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Start fading out after 1 second
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1000);

    // Navigate to the questions page after the fade-out animation
    const navigateTimer = setTimeout(() => {
      navigate('/questions');
    }, 1500); // 1 second for delay + 0.5 seconds for fade-out

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  const styles = {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#3CAF56',
    marginTop: '20%',
    fontFamily: 'Arial, sans-serif',
    opacity: fadeOut ? 0 : 2, // Fading effect
    transition: 'opacity 0.5s ease-in-out', // Smooth transition
  };

  return <h1 style={styles}>Ciao</h1>;
};

export default LandingPage;
