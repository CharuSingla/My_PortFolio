import React, { useState, useRef } from 'react';
import axios from 'axios';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://my-portfolio-docw.onrender.com/api/contact', form);
      alert('You will be contacted soon. Thank You!');
      formRef.current.reset();
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error submitting message');
      console.error(error);
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="heading">Contact Me</h2>
      <p className="subheading">I'd love to hear from you!</p>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
      </form>
      <p className="note">Feel free to reach out for any inquiries or collaborations!</p>
    </section>
  );
};

export default Contact;
