import React, { useEffect } from 'react';
import { Typography } from '@mui/material'; // Added import for Typography
import QuestionComponent from '../components/molecules/question';
import { sdk } from '../sdk/sdk';
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
    const navigate = useNavigate()
  const [question, setQuestion] = React.useState({})
  const [indexQuestion, setIndexQuestion] = React.useState(0)
  const [indexAnswer, setIndexAnswer] = React.useState(null)
  const [fadeOutAll, setFadeOutAll] = React.useState(false);
  const [fadeOutQuestion, setFadeOutQuestion] = React.useState(false);
  
  const questionStyles = {
    opacity: fadeOutQuestion ? 0 : 2, // Fading effect
    transition: 'opacity 0.5s ease-in-out', // Smooth transition
  };

  const allStyles = {
    opacity: fadeOutAll ? 0 : 2, // Fading effect
    transition: 'opacity 0.5s ease-in-out', // Smooth transition
  };
  
  const fadeOutEffect = (onPress, setFadeOut) => {
      setFadeOut(true)
    setTimeout(() => {
      onPress()
      setFadeOut(false)
    }, 1000)
  }
  
  useEffect(() => {
    sdk.getQuestion(indexQuestion).then((data) => {
      setIndexAnswer(null)
      setQuestion(data.data)
      if (Object.keys(data.data).length === 0)
        fadeOutEffect(() => navigate('/home'), setFadeOutAll)
    })
  }, [indexQuestion, navigate])

  const handleClick = async () => {
    await sdk.answerQuestion(indexAnswer, indexQuestion)
    fadeOutEffect(() => setIndexQuestion(indexQuestion + 1), setFadeOutQuestion)
  }

  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '20px', ...allStyles }}>
        Questions Page
      </Typography>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        textAlign: 'center' 
      }}>
        {
          Object.keys(question).length ? (
            <QuestionComponent
              textStyle={questionStyles}
              question={question.question}
              options={question.options}
              status={indexQuestion.toString()}
              handleClick={handleClick}
              setIndexAnswer={setIndexAnswer}
              indexAnswer={indexAnswer}
            />
          ) : null
        }
      </div>
    </div>
  );
};

export default QuestionsPage;
