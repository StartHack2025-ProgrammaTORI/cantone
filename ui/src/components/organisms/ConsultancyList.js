import React from 'react';
import ConsultancyCard from '../molecules/ConsultancyCard';

const ConsultancyList = ({ title, items }) => {
  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {items.map((item, index) => (
          <ConsultancyCard key={index} title={item} />
        ))}
      </div>
    </div>
  );
};

export default ConsultancyList;
