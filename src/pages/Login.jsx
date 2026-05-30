import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Navigate to account settings on login
    navigate('/account-settings');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">
          Signin to your<br />
          PopX account
        </h1>
        <p className="login-subtitle">
          Sign in to continue and manage<br />
          your PopX account.
        </p>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
