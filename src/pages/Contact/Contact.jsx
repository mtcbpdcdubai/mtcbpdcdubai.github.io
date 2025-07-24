import { useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_kda5q9b';
    const templateID = 'template_0hn08on';
    const userID = 'tTroMghMevYF58aVo';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>Would you like to leave us a message?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label>Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-field full-width">
            <label>Leave us a message...</label>
            <textarea
              name="message"
              placeholder="Leave us a message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
