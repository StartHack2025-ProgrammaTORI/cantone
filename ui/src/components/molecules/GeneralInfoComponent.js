import React, { useState, useEffect } from 'react';

const GeneralInfoComponent = ({ onChange }) => {
  const [info, setInfo] = useState({
    is_b2b: false,
    name: '',
    description: '',
    contact: '',
    revenue: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInfo({
      ...info,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  useEffect(() => {
    onChange(info);
  }, [info, onChange]);

  const inputStyle = {
    border: '1px solid black',
    width: 'calc(100% - 100px)',
    padding: '5px',
    marginBottom: '10px'
  };

  const textareaStyle = {
    border: '1px solid black',
    width: '100%',
    padding: '5px',
    marginBottom: '10px',
    resize: 'vertical'
  };

  const switchStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '10px',
    justifyContent: 'space-between'
  };

  const revenueContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const euroSymbolStyle = {
    marginLeft: '5px'
  };

  const labelStyle = {
    textAlign: 'left',
    paddingRight: '10px'
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  return (
    <form style={{ width: '100%' }}>
      <div style={switchStyle}>
        <label style={labelStyle}>Offro servizi ad altre aziende:</label>
        <input type="checkbox" name="is_b2b" checked={info.is_b2b} onChange={handleChange} />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle}>Nome:</label>
        <input type="text" name="name" value={info.name} onChange={handleChange} style={{ ...inputStyle, marginLeft: 'auto' }} />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle}>Descrizione:</label>
      </div>
      <div style={rowStyle}>
        <textarea name="description" value={info.description} onChange={handleChange} style={{ ...textareaStyle, marginLeft: 'auto' }} rows="4" />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle}>Contatti:</label>
        <input type="text" name="contact" value={info.contact} onChange={handleChange} style={{ ...inputStyle, marginLeft: 'auto' }} />
      </div>
      <div style={revenueContainerStyle}>
        <label style={labelStyle}>Fatturato:</label>
        <input type="number" name="revenue" value={info.revenue} onChange={handleChange} style={{ ...inputStyle, marginLeft: 'auto' }} />
        <span style={euroSymbolStyle}>€</span>
      </div>
      <button onClick={handleChange} style={{ alignSelf: 'flex-end' }}>Continua</button>
    </form>
  );
};

export default GeneralInfoComponent;
