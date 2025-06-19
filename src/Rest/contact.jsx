import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Form submitted');
  };

  return (
    <div>
      <header>
        <a href="index.html">
          <img 
            src="https://cdn.prod.website-files.com/65c4a9636687ae3b0294350e/65fbe8183743ea9b19f75ccc_shipway-logo-1.svg" 
            alt="Company Logo" 
            className="company-logo" 
          />
        </a>
        <h1>Contact Us</h1>
      </header>

      <main>
        <h2>We are here to help!</h2>
        <p>If you have any questions, feel free to contact us via email or the form below:</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
