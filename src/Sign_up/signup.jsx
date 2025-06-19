import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [userType, setUserType] = useState('seller');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUserTypeChange = (e) => setUserType(e.target.value);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSellerSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/accounts/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Seller Registered Successfully!');
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.detail || 'Registration failed. Try again.');
      }
    } catch (err) {
      console.error('Signup Error:', err);
      setError('Something went wrong. Try again later.');
    }
  };

  const handleBuyerSubmit = (e) => {
    e.preventDefault();
    alert('Tracking buyer order...');
  };

  return (
    <div className="signup-container">
      {/* LEFT - Branding */}
      <div className="signup-left">
        <h2>15,000+ online sellers prefer Yaarideal Logistics</h2>
        <p>Get an all-in-one shipping automation solution for fast-scaling.</p>
        <img
          src="https://app.shipway.com/images/signup/landing_signup/client-banner.png"
          alt="Trusted by brands"
        />
      </div>

      {/* RIGHT - Form */}
      <div className="signup-right">
        <div className="user-toggle">
          <label>
            <input
              type="radio"
              value="seller"
              checked={userType === 'seller'}
              onChange={handleUserTypeChange}
            />
            I'm a Seller
          </label>
          <label>
            <input
              type="radio"
              value="buyer"
              checked={userType === 'buyer'}
              onChange={handleUserTypeChange}
            />
            I'm a Buyer
          </label>
        </div>

        <h2>Start with a free account</h2>

        {userType === 'seller' ? (
          <>
            <button className="google-btn">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="G" />
              Sign in with Google
            </button>

            <div className="divider">OR</div>

            <form onSubmit={handleSellerSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Optional Fields - Not sent to backend, UI only */}
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Company name" />
              <div className="phone-row">
                <select>
                  <option>+91</option>
                </select>
                <input type="tel" placeholder="Phone" />
              </div>
              <select>
                <option value="">Select Monthly Order Volume</option>
                <option>1 - 100 Orders</option>
                <option>101 - 500 Orders</option>
              </select>
              <div className="recaptcha">
                <input type="checkbox" required />
                <label>I'm not a robot</label>
              </div>

              <button type="submit" className="submit-btn">Sign Up</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </>
        ) : (
          <form onSubmit={handleBuyerSubmit}>
            <input type="text" placeholder="Order ID or AWB" required />
            <button type="submit" className="submit-btn">Track Order</button>
          </form>
        )}

        <div className="login-redirect">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
