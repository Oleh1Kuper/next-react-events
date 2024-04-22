'use client';

import React, { useRef } from 'react';
import { regexEmail } from '@/constants';
import classes from './NewsletterRegistration.module.css';

const NewsletterRegistration = () => {
  const inputRef = useRef(null);

  async function registrationHandler(event) {
    event.preventDefault();

    if (!regexEmail.test(inputRef.current.value)) {
      return;
    }

    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: inputRef.current.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>

      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={inputRef}
            type="text"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />

          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
