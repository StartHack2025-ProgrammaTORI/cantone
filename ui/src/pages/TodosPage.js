import React, { useEffect } from 'react';
import { sdk } from '../sdk/sdk';
import { Typography } from '@mui/material'; // Added import for Typography
import { margin } from '../styles/styles';
import ActiveProject from '../components/molecules/activeProject';

const TodosPage = () => {
  const [todos, setTodos] = React.useState([]);
  const [id, setId] = React.useState(null);
  const [fadeOutTodo, setFadeOutTodo] = React.useState(false);

  const fadeOutEffect = (onPress, setFadeOut) => {
    setFadeOut(true)
    setTimeout(() => {
      onPress()
      setFadeOut(false)
    }, 500)
  }
  
  useEffect(() => {
    sdk.getTodos().then((data) => {
      setTodos(data.data);
    })
  }, [])

  function setTodoAsDone(id) {
    sdk.setTodoAsDone(id).then((data) => {
      setTodos(data.data)
      setId(null)
    })
  }
  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'left', marginTop: '20px', marginBottom: margin.extraLarge, fontWeight: 'bold' }}>
        Active projects:
      </Typography>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
      }}>
        {
          todos.length ? (
            todos.map((todo, index) => {
              const todoStyles = {
                opacity: fadeOutTodo & todo.id === id ? 0 : 2, // Fading effect
                transition: 'opacity 0.5s ease-in-out', // Smooth transition
              };
              return <ActiveProject
                title={todo.project}
                step={todo.steps[todo.current_step]}
                checked={id === todo.id}
                style={todoStyles}
                handleClick={() => {
                  setId(todo.id)
                  fadeOutEffect(() => {
                    setTodoAsDone(todo.id)
                  }, setFadeOutTodo)
                  }}
              />
            })
          ) : null
        }
      </div>
    </div>
  )
};

export default TodosPage;
