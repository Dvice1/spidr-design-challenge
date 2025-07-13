import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './InterestForm.css';

const InterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      className="form-box"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: 3,
        borderRadius: 2,
        backgroundColor: (theme) => theme.palette.background.paper,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
        maxWidth: 500,
        margin: 'auto',
        marginTop: 5,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Air Fryer Interest Form
      </Typography>
      <div className="form-field-container">
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>
      <div className="form-field-container">
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>
      <div className="form-field-container">
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>
      <div className="form-field-container">
        <TextField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>
      <div className="form-field-container">
        <TextField
          label="Guess the Air Fryer's Cost ($)"
          name="costGuess"
          type="number"
          value={formData.costGuess}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>
      <div className="form-field-container">
        <TextField
          label="Spidr PIN (####-####-####-####)"
          name="pin"
          value={formData.pin}
          onChange={handleChange}
          required
          fullWidth
        />
      </div>
      <div className="form-field-container">
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default InterestForm;