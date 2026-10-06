import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Snackbar, Alert } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 16px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  transition: border-color 0.2s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ErrorMessage = styled.span`
  color: #f44336;
  font-size: 13px;
  margin-top: -2px;
  padding-left: 4px;
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 4px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_email: '',
    from_name: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const form = useRef();

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.from_email.trim())) {
        newErrors.from_email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSnackbarMessage('Please fill in all required fields correctly.');
      setSnackbarSeverity('error');
      setOpen(true);
      return;
    }

    setSnackbarMessage('Email sent successfully!');
    setSnackbarSeverity('success');
    setOpen(true);
    setFormData({
      from_email: '',
      from_name: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit} noValidate>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInputWrapper>
            <ContactInput
              placeholder="Your Email *"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              style={errors.from_email ? { borderColor: '#f44336' } : {}}
            />
            {errors.from_email && <ErrorMessage>{errors.from_email}</ErrorMessage>}
          </ContactInputWrapper>

          <ContactInputWrapper>
            <ContactInput
              placeholder="Your Name *"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              style={errors.from_name ? { borderColor: '#f44336' } : {}}
            />
            {errors.from_name && <ErrorMessage>{errors.from_name}</ErrorMessage>}
          </ContactInputWrapper>

          <ContactInputWrapper>
            <ContactInput
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </ContactInputWrapper>

          <ContactInputWrapper>
            <ContactInputMessage
              placeholder="Message *"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={errors.message ? { borderColor: '#f44336' } : {}}
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
          </ContactInputWrapper>

          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert onClose={() => setOpen(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;