import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem('userName', formData.fullName);
    localStorage.setItem('userEmail', formData.emailAddress);
    navigate('/account-settings');
  };

  return (
    <div className="create-container">
      <div className="create-content">
        <h1 className="create-title">
          Create your<br />
          PopX account
        </h1>

        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phoneNumber">
            Phone number<span className="required">*</span>
          </label>
          <input
            className="form-input"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="emailAddress">
            Email address<span className="required">*</span>
          </label>
          <input
            className="form-input"
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="Marry Doe"
            value={formData.emailAddress}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="companyName">Company name</label>
          <input
            className="form-input"
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <p className="agency-label">
            Are you an Agency?<span className="required">*</span>
          </p>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        <button className="btn-create" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default CreateAccount;
