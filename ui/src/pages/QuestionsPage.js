import React from 'react';
import { QuestionComponent } from '../components/molecules/question';

const QuestionsPage = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      <QuestionComponent />
    </div>
  );
};

export default QuestionsPage;
