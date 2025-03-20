import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="contained"
        style={{ position: 'absolute', top: '10px', right: '10px' }} // Changed 'left' to 'right'
        onClick={() => navigate('/home')}
      >
        Home
      </Button>
      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '20px' }}>
        Settings Page
      </Typography>
    </div>
  );
};

export default SettingsPage;
