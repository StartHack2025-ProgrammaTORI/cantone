import React from 'react';
import { sdk } from '../../sdk/sdk'; // Import the SDK

const DecisionModal = ({ open, handleClose, title }) => {
  const handleDecision = async (decision) => {
    // await sdk.sendDecision(title, decision);
    handleClose();
  };

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', backgroundColor: 'white', border: '1px solid #000', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', zIndex: 1000 }}>
      <h2>Is your decision not to collaborate due to the company or the area?</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={() => handleDecision('company')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Company</button>
        <button onClick={() => handleDecision('area')} style={{ padding: '10px 20px', cursor: 'pointer' }}>Area</button>
      </div>
    </div>
  );
};

export default DecisionModal;
