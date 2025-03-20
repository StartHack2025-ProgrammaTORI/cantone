import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConsultancyList from '../components/organisms/ConsultancyList';

const HomePage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  // Mocked data
  const suggestedConsultancy = ['Consultancy A', 'Consultancy B', 'Consultancy C'];
  const requestedConsultancy = ['Consultancy D', 'Consultancy E'];
  const consultancyAskedFor = ['Consultancy F', 'Consultancy G', 'Consultancy H'];

  // Removed useEffect that handles fade-out and navigation
  const pageStyles = {
    opacity: 1, // Set opacity to a fixed value
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <div style={pageStyles}>
      <Button
        variant="contained"
        style={{ position: 'absolute', top: '10px', right: '10px' }} // Changed 'left' to 'right'
        onClick={() => navigate('/settings')}
      >
        Settings
      </Button>
      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '20px' }}>
        .inno
      </Typography>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <ConsultancyList title="Suggested Consultancy" items={suggestedConsultancy} />
        <ConsultancyList title="Requested Consultancy" items={requestedConsultancy} />
        <ConsultancyList title="Consultancy I'm Asked For" items={consultancyAskedFor} />
      </div>
    </div>
  );
};

export default HomePage;
