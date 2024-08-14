import React, { useState } from 'react';

const ContactForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      form.reset();
    } catch (error) {
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
      setErrorMessage('There was an error submitting the form. Please try again later.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div id="contact" className="section-bg wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>

        <div className="form">
          <div id="sendmessage" className={showSuccessMessage ? 'show' : ''}>
            Your message has been sent. Thank you!
          </div>
          <div id="errormessage" className={showErrorMessage ? 'show' : ''}>
            {errorMessage}
          </div>
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/e7ddce6a8a55f057438ee069f82b0500"
            method="POST"
            className="contactForm"
          >
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
