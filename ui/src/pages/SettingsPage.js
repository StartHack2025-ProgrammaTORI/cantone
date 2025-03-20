import React from 'react';
import { Button } from '@mui/material';
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
      <h4 style={{ textAlign: 'center', marginTop: '20px' }}>
        Settings Page
      </h4>
    </div>
  );
};

export default SettingsPage;
