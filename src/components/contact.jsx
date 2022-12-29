import React from 'react'
import './contact.css'

function contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p id='get-in-touch-p'>Get in touch with us by filling out the form below:</p>
      <form>
        <label htmlFor="name" id='name-p'>Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email" id='email-p'>Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="message" id='message-p'>Message:</label>
        <br />
        <textarea id="message" name="message" />
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default contact;