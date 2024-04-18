import React from 'react';
import { BiCalendarEvent } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import Button from '../Button/Button';
import classes from './EventItem.module.css';

const EventItem = ({ event }) => {
  const { id, title, location, date, image } = event;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />

      <div className={classes.content}>
        <div>
          <h2>{title}</h2>

          <div className={classes.date}>
            <BiCalendarEvent />
            <time>{readableDate}</time>
          </div>

          <div className={classes.address}>
            <SlLocationPin />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            Explore Event
            <BsArrowRight />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
