import React from 'react';
import SettingsCard from '../molecules/SettingsCard';

const SettingsList = ({ title, items, type, setItems }) => {
  const handleRemove = (item) => {
    setItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: "left" }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '30px' }}>
        {items.map((item, index) => (
          <SettingsCard key={index} title={item} type={type} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
};

export default SettingsList;
