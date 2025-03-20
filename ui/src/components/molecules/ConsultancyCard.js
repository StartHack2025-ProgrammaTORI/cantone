import React from 'react';
import { Card, CardContent, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const ConsultancyCard = ({ title }) => {
  return (
    <Card style={{ margin: '0px 0', padding: '0px 0px', textAlign: 'left', width: '100%', maxWidth: '600px', border: 'none', boxShadow: 'none', height: 'auto' }}>
      <CardContent style={{ padding: '0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h4 style={{ textAlign: 'left'}}>→ {title}</h4>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button href="#" style={{ textAlign: 'left', padding: '0 10px', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>Details</button>
          <IconButton aria-label="confirm" style={{ padding: '0 0px', color: 'green' }}>
            <CheckIcon />
          </IconButton>
          <IconButton aria-label="close" style={{ padding: '0 0px', color: 'red' }}>
            <CloseIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultancyCard;
