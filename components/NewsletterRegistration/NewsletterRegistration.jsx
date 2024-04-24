'use client';

import React, { useContext, useRef, useState } from 'react';
import { regexEmail } from '@/constants';
import { Context } from '@/store/NotificationContexts';
import classes from './NewsletterRegistration.module.css';

const NewsletterRegistration = () => {
  const [email, setEmail] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const { showNotification } = useContext(Context);

  const registrationHandler = async (event) => {
    event.preventDefault();

    if (!regexEmail.test(email)) {
      return;
    }

    setIsLoad(true);

    showNotification({
      title: 'Signing up...',
      message: 'Register for news letters.',
      status: 'pending',
    });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Internal Server Error');
      }

      showNotification({
        title: 'Success',
        message: 'Successfully registered for newsletter',
        status: 'success',
      });

      setEmail('');
    } catch (error) {
      showNotification({
        title: 'Error!',
        message: error.message,
        status: 'error',
      });
    } finally {
      setIsLoad(false);
    }
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>

      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />

          <button
            type="submit"
            disabled={isLoad}
          >
            {isLoad ? 'Loading...' : 'Register'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
