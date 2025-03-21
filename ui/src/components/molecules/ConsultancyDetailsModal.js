import React, { useEffect, useState } from 'react';
import { sdk } from '../../sdk/sdk'; // Import the SDK

const ConsultancyDetailsModal = ({ open, handleClose, title, description, email }) => {
  const [details, setDetails] = useState({ description: '', email: '' });

  useEffect(() => {
    if (open) {
      // Mocked SDK call to fetch consultancy details
      sdk.getConsultancyDetails(title).then(data => setDetails(data));
    }
  }, [open, title]);

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', backgroundColor: 'white', border: '1px solid #000', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', zIndex: 1000 }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Email: {email}</p>
      <button onClick={handleClose} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>Close</button>
    </div>
  );
};

export default ConsultancyDetailsModal;
