import styles from './ContactStyles.module.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_ONE, import.meta.env.VITE_TWO, form.current, {
        publicKey: import.meta.env.VITE_THREE,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true); // Update emailSent state to true on success
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input
          className={`hover btn ${emailSent ? styles.success : styles.error}`} // Conditionally apply success or error class
          type="submit"
          value={emailSent ? 'Sent' : 'Submit'}
          disabled={emailSent} // Disable button if email is sent
        />
      </form>
    </section>
  );
}

export default Contact;
