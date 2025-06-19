import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);
        setError('');
        alert('Login successful!');
        navigate('/edit');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="left-container">
        <img
          src="https://res.cloudinary.com/dla5rblx7/images/v1730530036/parcellogo_2-hd/parcellogo_2-hd.png?_i=AA"
          className="company-logo"
          alt="Company Logo"
        />
        <h1>Welcome to Parcel Mitra</h1>
        <p>The Logistics Super App to Power your D2C Growth</p>
        <img
          src="https://app.shipway.com/images/signup/Image-bg.png"
          className="bottom-image"
          alt="Decor"
        />
      </div>

      <div className="right-container">
        <div className="form-box">
          <h2>Happy Login!</h2>

          <div className="google-login-btn">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" className="google-logo" />
            Sign in with Google
          </div>

          <div className="separator">---------------- OR ----------------</div>

          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <div className="password-field">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={handlePasswordToggle}>
                {/* eye icon if needed */}
              </span>
            </div>

            <button type="submit" className="submit-btn">Login</button>
          </form>

          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

          <p style={{ marginTop: '10px' }}>
            New to ParcelMitra.in? <Link to="/signup">Click Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
