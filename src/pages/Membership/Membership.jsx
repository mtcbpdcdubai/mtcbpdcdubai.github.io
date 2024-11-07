import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../../components/Modal/Modal';
import './Membership.css';

const Membership = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setShowModal(false);
        }, 3000); // Close the modal after 3 seconds
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.');
      });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: ''
    });
  };

  return (
    <div className="membership-page">
      <h2>Join the MTC Community</h2>
      <div className="membership-cards">
        <div className="membership-card card-member">
          <h3>Become a Member</h3>
          <h4>What You Get as a Member:</h4>
          <p>
            Join a thriving community of tech enthusiasts and gain exclusive access to everything MTC has to offer!
          </p>
          <ul>
            <li><b>Exclusive Competitions</b><br />Put your skills to the test in competitions designed to challenge and inspire. Compete for amazing prizes, free of entry fees.</li>
            <li><b>Free Workshops</b><br />Participate in hands-on workshops covering the latest in tech and innovation. Learn from the best without paying a dime!</li>
            <li><b>Inspiring Guest Speakers</b><br />Attend talks from industry leaders and visionaries. As a member, you get exclusive, free access to these events.</li>
          </ul>
          <p>Ready to Elevate Your Tech Journey?</p>
          <div className="button-container">
            <button className="register-button" onClick={() => window.location.href = "https://forms.gle/F6NgdzjqZCJyRaAe6"}>Register Now</button>
          </div>
        </div>
        <div className="membership-card card-updates">
  <h3>Membership Renewal</h3>
  <h4>Membership Benefits Summary</h4>
  <p>
  Welcome back! We’re glad you’ve decided to renew your membership with us. Let’s get started! Be the first to know about our exciting events—whether it's workshops, competitions, guest speakers, or more! By signing up, you'll:
  </p>
  <ul>
    <li><b>Exclusive Blog Insights</b></li>
    <li><b>Receive Event Updates</b></li>
    <li><b>Enjoy Member Perks</b></li>
  </ul>
  <p>Ready to Join the MTC Community once again?</p>
  <div className="button-container">
    <a
      href="https://forms.gle/JuCbSPMFjuFVrjJq8"
      target="_blank"
      rel="noopener noreferrer"
      className="subscribe-button"
    >
      Renew Now
    </a>
  </div>
</div>

      </div>
      <Modal show={showModal} handleClose={toggleModal}>
        {!showSuccess ? (
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} required />
              </div>
            </div>
            <div className="membership-fee">Membership Fee: 35 AED</div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : (
          <div className="success-message">
            <div className="tick-animation">&#10004;</div>
            <p>One of our club members will contact you to collect the payment.</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Membership;
