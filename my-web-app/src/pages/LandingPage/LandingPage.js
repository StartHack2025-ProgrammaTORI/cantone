import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './LandingPage.css';

const LandingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoginClick = () => {
    setFadeOut(true);
  };

  return (
    <Box className="landing-container">
      <Typography
        variant="h1"        node -v        node -v        node -v
        className={`hello-text ${fadeOut ? 'fade-out' : ''}`}
      >
        Hello
      </Typography>
      <Button
        variant="contained"
        className="login-button"
        onClick={handleLoginClick}
      >
        Login
      </Button>
    </Box>
  );
};

export default LandingPage;
