'use client';

import React, { useRef } from 'react';
import { months } from '@/constants';
import Button from '../Button/Button';
import classes from './EventsSearch.module.css';
import { useRouter } from 'next/navigation';

const EventsSearch = () => {
  const router = useRouter();
  const yearInputRef = useRef(null);
  const monthInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const year = yearInputRef.current.value;
    const month =monthInputRef.current.value;

    router.push(`/events/${year}/${month}`);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>

          <select id="year" ref={yearInputRef}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>

          <select id="month" ref={monthInputRef}>
            {months.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
