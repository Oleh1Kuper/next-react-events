import React from 'react';
import Link from 'next/link';
import classes from './EventItem.module.css';

const EventItem = ({ event }) => {
  const { id, title, location, date, image } = event;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });
  const formattedAddress = location.replace(' ,', '\n');

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />

      <div className={classes.content}>
        <div>
          <h2>{title}</h2>

          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>

          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div>
          <Link className={classes.actions} href={`/events/${id}`}>
            Explore Event
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
