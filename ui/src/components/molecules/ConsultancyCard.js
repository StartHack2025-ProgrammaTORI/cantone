import React, { useState } from 'react';
import { Card, CardContent, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ConsultancyDetailsModal from './ConsultancyDetailsModal'; // Import the new component
import DecisionModal from './DecisionModal'; // Import the new component

const ConsultancyCard = ({id, title, role, status, description, email, handleConfirm, handleReject }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [decisionOpen, setDecisionOpen] = useState(false);

  const handleDetailsOpen = () => setDetailsOpen(true);
  const handleDetailsClose = () => setDetailsOpen(false);

  const handleDecisionOpen = () => setDecisionOpen(true);
  const handleDecisionClose = () => setDecisionOpen(false);

  const handleConfirmClick = () => {
    handleConfirm(id, role)
    // Add any additional logic for the confirm action here
  };

  return (
    <>
      <Card style={{ margin: '0px 0', padding: '0px 0px', textAlign: 'left', width: '100%', maxWidth: '600px', border: 'none', boxShadow: 'none', height: 'auto' }}>
        <CardContent style={{ padding: '0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h4 style={{ textAlign: 'left'}}>→ {title}</h4>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button onClick={handleDetailsOpen} style={{ textAlign: 'left', padding: '0 10px', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>Details</button>
            {
              role === 'RECEIVER' && status === 'PENDING' ?
                null : (
                <>
                  <IconButton aria-label="confirm" style={{ padding: '0 0px', color: 'green' }} onClick={handleConfirmClick}>
                    <CheckIcon />
                  </IconButton>
                  <IconButton aria-label="close" style={{ padding: '0 0px', color: 'red' }} onClick={handleDecisionOpen}>
                    <CloseIcon />
                  </IconButton>
                </>
              )
            }
          </div>
        </CardContent>
      </Card>
      <ConsultancyDetailsModal open={detailsOpen} handleClose={handleDetailsClose} title={title} description={description} email={email} />
      <DecisionModal open={decisionOpen} handleClose={handleDecisionClose} title={title} />
    </>
  );
};

export default ConsultancyCard;
