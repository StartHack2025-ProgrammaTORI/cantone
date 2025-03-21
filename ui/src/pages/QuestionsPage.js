import React, { useEffect, useState } from 'react';
import QuestionComponent from '../components/molecules/question';
import GeneralInfoComponent from '../components/molecules/GeneralInfoComponent'; // New import
import { sdk } from '../sdk/sdk';
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState({});
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [indexAnswer, setIndexAnswer] = useState(null);
  const [fadeOutAll, setFadeOutAll] = useState(false);
  const [fadeOutQuestion, setFadeOutQuestion] = useState(false);
  const [generalInfoSubmitted, setGeneralInfoSubmitted] = useState(false); // New state
  const [generalInfo, setGeneralInfo] = useState({}); // New state

  const questionStyles = {
    opacity: fadeOutQuestion ? 0 : 1,
    transition: 'opacity 0.1s ease-in-out',
  };

  const allStyles = {
    opacity: fadeOutAll ? 0 : 1,
    transition: 'opacity 0.1s ease-in-out',
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
    else if (generalInfoSubmitted) { // Check if general info is submitted
      sdk.getQuestion(indexQuestion).then((data) => {
        setIndexAnswer(null);
        setQuestion(data.data);
        if (Object.keys(data.data).length === 0)
          fadeOutEffect(() => navigate('/home'), setFadeOutAll);
      });
    }
  }, [indexQuestion, navigate, generalInfoSubmitted]);

  const handleClick = async () => {
      await sdk.answerQuestion(indexAnswer, indexQuestion);
      fadeOutEffect(() => setIndexQuestion(indexQuestion + 1), setFadeOutQuestion);
  };

  const handleGeneralInfoChange = async (info) => { // New handler
    setGeneralInfo(info);
    await sdk.submitGeneralInfo(generalInfo);
    setGeneralInfoSubmitted(true);
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

  const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '20px'
  };

  return (
    <div style={pageStyles}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        Questions Page
      </h1>
      <div style={{ marginTop: '30px', textAlign: 'left', width: '100%' , padding: '20px'}}>
        {
          !generalInfoSubmitted ? (
            <GeneralInfoComponent onChange={handleGeneralInfoChange} /> // New component
          ) : Object.keys(question).length ? (
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
