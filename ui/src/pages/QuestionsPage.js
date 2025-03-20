import React, { useEffect } from 'react';
import { Typography } from '@mui/material'; // Added import for Typography
import { QuestionComponent } from '../components/molecules/question';
import { sdk } from '../sdk/sdk';

const QuestionsPage = () => {
  const [question, setQuestion] = React.useState({})
  const [indexQuestion, setIndexQuestion] = React.useState(0)
  const [indexAnswer, setIndexAnswer] = React.useState(null)
  
  useEffect(() => {
    sdk.getQuestion(indexQuestion).then((data) => {
      console.log(data.data)
      setIndexAnswer(null)
      setQuestion(data.data)
    })
  }, [indexQuestion])

  const handleClick = async () => {
    await sdk.answerQuestion(indexAnswer, indexQuestion)
    setIndexQuestion(indexQuestion + 1)
  }

  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center', marginTop: '20px' }}>
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
