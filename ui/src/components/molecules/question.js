import React from 'react';

function QuestionComponent({ question, options, status, handleClick, indexAnswer, setIndexAnswer, textStyle, style }) {
  return (
    <div style={{ border: 'none', boxShadow: 'none', textAlign: 'center', width: '100%', ...style }}>
      <div style={{ ...textStyle }}>
        <h2 style={{ textAlign: "left" }}>{question}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '30px' }}>
          {options.map((option) => {
            console.log("option: ", option.id)
          return (
            <label key={option.id} style={{ marginBottom: '10px', textAlign: 'left' }}>
              <input
                type="radio"
                value={option.text}
                checked={option.id === indexAnswer}
                onChange={() => setIndexAnswer(option.id)}
                style={{ marginRight: '10px' }}
              />
              {option.text}
            </label>
          )
    })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <button onClick={handleClick} style={{ alignSelf: 'flex-end' }}>Continua</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;