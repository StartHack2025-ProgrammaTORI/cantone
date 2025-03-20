import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ConsultancyCard = ({ title }) => {
  return (
    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center' }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ConsultancyCard;
