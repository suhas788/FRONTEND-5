// src/components/RegistrationForm.jsx
import React, { useState, useEffect } from 'react';

const RegistrationForm = ({ setShowRegistration }) => {
  // State
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // Handle input change
  const handleRegistrationChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form on input change
  useEffect(() => {
    const validateForm = () => {
      const errors = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      };

      if (registrationData.name.length < 3 || registrationData.name.length > 30) {
        errors.name = 'Name should be between 3 and 30 characters.';
      }

      if (!/\S+@\S+\.\S+/.test(registrationData.email)) {
        errors.email = 'Please enter a valid email address.';
      }

      if (registrationData.password.length < 10 || !/\W/.test(registrationData.password)) {
        errors.password =
          'Password should be at least 10 characters long and contain at least one special character.';
      }

      if (registrationData.password !== registrationData.repeatPassword) {
        errors.repeatPassword = 'Passwords do not match.';
      }

      setFormErrors(errors);
      setIsFormValid(Object.values(errors).every((error) => error === ''));
    };

    validateForm();
  }, [registrationData]);

  // Handle form submission
  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      // TODO: Implement registration logic (save data to state or make API call)
      console.log('Registration form submitted:', registrationData);

      // Clear registration form after successful submission
      setRegistrationData({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
      });

      // Close the registration form
      setShowRegistration(false);
    }
  };

  return (
    <div className="registration-section">
      <form onSubmit={handleRegistrationSubmit} className="registration-form">
        {/* Name input */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={registrationData.name}
            onChange={handleRegistrationChange}
          />
          {formErrors.name && <p className="error-message">{formErrors.name}</p>}
        </label>

        {/* Email input */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={registrationData.email}
            onChange={handleRegistrationChange}
          />
          {formErrors.email && <p className="error-message">{formErrors.email}</p>}
        </label>

        {/* Password input */}
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={registrationData.password}
            onChange={handleRegistrationChange}
          />
          {formErrors.password && <p className="error-message">{formErrors.password}</p>}
        </label>

        {/* Repeat Password input */}
        <label>
          Repeat Password:
          <input
            type="password"
            name="repeatPassword"
            value={registrationData.repeatPassword}
            onChange={handleRegistrationChange}
          />
          {formErrors.repeatPassword && (
            <p className="error-message">{formErrors.repeatPassword}</p>
          )}
        </label>

        {/* Submit button */}
        <button type="submit" disabled={!isFormValid} className="submit-btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;