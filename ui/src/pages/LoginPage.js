import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../components/context/user';

const LoginPage = () => {
  const { setUser, user } = React.useContext(UserContext);
  const [fadeOut, setFadeOut] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.id) navigate('/home');
    const sessionToken = localStorage.getItem('sessionToken');
    if (sessionToken) {
      navigate('/home');
    }
  }, [navigate, user]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQyTmFowgLcAv0mcFOxcLM5_m2pXtZk04', {
        email,
        password,
        returnSecureToken: true
      });
      setUser({
        email: response.data.email,
        id: response.data.localId,
        idToken: response.data.idToken
      })
      const token = response.data.idToken;
      localStorage.setItem('sessionToken', token);
      setFadeOut(true);
      setTimeout(() => {
        navigate('/home');
      }, 500); // Adjust the delay to match the fade-out duration
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const pageStyles = {
    opacity: fadeOut ? 0 : 1, // Fading effect
    transition: 'opacity 0.5s ease-in-out',
    maxWidth: '600px',
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={pageStyles}>
      <h4 style={{ textAlign: 'center', marginTop: '20px' }}>
        Login Page
      </h4>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginTop: '20px', width: '100%', padding: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: '20px', width: '100%', padding: '10px' }}
      />
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          {error}
        </p>
      )}
      <button
        onClick={handleLogin}
        style={{ marginTop: '30px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
