import React from 'react';
import ConsultancyCard from '../molecules/ConsultancyCard';

const ConsultancyList = ({ title, items }) => {
  console.log("items: ", items)
  return (
    <div style={{ margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: "left" }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '30px' }}>
        {items.map((item, index) => (
          <ConsultancyCard key={index} title={item.consultancy_provider.name} />
        ))}
      </div>
    </div>
  );
};

export default ConsultancyList;
