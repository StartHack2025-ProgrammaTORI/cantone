import React, { useEffect } from 'react';
import QuestionComponent from '../components/molecules/question';
import { sdk } from '../sdk/sdk';
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = React.useState({});
  const [indexQuestion, setIndexQuestion] = React.useState(0);
  const [indexAnswer, setIndexAnswer] = React.useState(null);
  const [fadeOutAll, setFadeOutAll] = React.useState(false);
  const [fadeOutQuestion, setFadeOutQuestion] = React.useState(false);

  const questionStyles = {
    opacity: fadeOutQuestion ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  };

  const allStyles = {
    opacity: fadeOutAll ? 0 : 1,
    transition: 'opacity 0.5s ease-in-out',
  };

  const fadeOutEffect = (onPress, setFadeOut) => {
    setFadeOut(true);
    setTimeout(() => {
      onPress();
      setFadeOut(false);
    }, 1000);
  };

  useEffect(() => {
    if (indexQuestion >= 5)
      fadeOutEffect(() => navigate('/home'), setFadeOutAll);
    else {
      sdk.getQuestion(indexQuestion).then((data) => {
        setIndexAnswer(null);
        setQuestion(data.data);
        if (Object.keys(data.data).length === 0)
          fadeOutEffect(() => navigate('/home'), setFadeOutAll);
      });
    }
  }, [indexQuestion, navigate]);

  const handleClick = async () => {
    await sdk.answerQuestion(indexAnswer, indexQuestion);
    fadeOutEffect(() => setIndexQuestion(indexQuestion + 1), setFadeOutQuestion);
  };

  const pageStyles = {
    opacity: 1,
    transition: 'opacity 0.5s ease-in-out',
    maxWidth: '600px',
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    border: 'none', boxShadow: 'none'
  };

  const listStyles = {
    margin: '0',
    width: '100%',
    border: 'none', boxShadow: 'none'
  };

  return (
    <div style={pageStyles}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Questions Page
      </h1>
      <div style={{ marginTop: '30px', textAlign: 'center', width: '100%' , padding: '20px'}}>
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
              style={listStyles}
            />
          ) : null
        }
      </div>
    </div>
  );
};

export default QuestionsPage;
