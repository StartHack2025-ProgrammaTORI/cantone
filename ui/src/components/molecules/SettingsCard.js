import React from 'react';
import { Card, CardContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { sdk } from '../../sdk/sdk'; // Import the SDK

const SettingsCard = ({ title, type, onRemove }) => {
  const handleRemove = async () => {
    try {
      if (type === 'area') {
        await sdk.removeDislikedArea(title);
      } else if (type === 'company') {
        await sdk.removeDislikedCompany(title);
      } else if (type === 'refusedCompany') {
        await sdk.removeRefusedCompany(title);
      }
      onRemove(title);
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  return (
    <Card style={{ margin: '0px 0', padding: '0px 0px', textAlign: 'left', width: '100%', maxWidth: '600px', border: 'none', boxShadow: 'none', height: 'auto' }}>
      <CardContent style={{ padding: '0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h4 style={{ textAlign: 'left'}}>→ {title}</h4>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton aria-label="close" style={{ padding: '0 0px', color: 'red' }} onClick={handleRemove}>
            <CloseIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsCard;
