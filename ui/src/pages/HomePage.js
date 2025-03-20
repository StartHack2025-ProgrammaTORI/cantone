import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConsultancyList from '../components/organisms/ConsultancyList';
import { sdk } from '../sdk/sdk'; // Import the SDK

const HomePage = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const [suggestedConsultancy, setSuggestedConsultancy] = useState([]);
  const [requestedConsultancy, setRequestedConsultancy] = useState([]);
  const [consultancyAskedFor, setConsultancyAskedFor] = useState([]);

  useEffect(() => {
    // Mocked data using SDK
    sdk.getSuggestedConsultancy().then(data => setSuggestedConsultancy(data));
    sdk.getRequestedConsultancy().then(data => setRequestedConsultancy(data));
    sdk.getConsultancyAskedFor().then(data => setConsultancyAskedFor(data));
  }, []);

  const pageStyles = {
    opacity: 1, // Set opacity to a fixed value
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <div style={pageStyles}>
      <button
        style={{ position: 'absolute', top: '10px', right: '10px', padding: '10px 20px', cursor: 'pointer', background: 'none', border: 'none'}}
        onClick={() => navigate('/settings')}
      >
        ⚙️
      </button>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        .inno
      </h1>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <ConsultancyList title="Suggested Consultancy" items={suggestedConsultancy} />
        <ConsultancyList title="Requested Consultancy" items={requestedConsultancy} />
        <ConsultancyList title="Consultancy I'm Asked For" items={consultancyAskedFor} />
      </div>
    </div>
  );
};

export default HomePage;
