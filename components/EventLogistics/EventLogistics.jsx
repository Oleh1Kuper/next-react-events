import React from 'react';
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';
import LogisticsItem from '../LogisticsItem/LogisticsItem';
import classes from './EventLogistics.module.css';

const EventLogistics = ({ event }) => {
  const { date, location, image, title } = event;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const locationText = location.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={title} width={400} height={400} />
      </div>

      <ul className={classes.list}>
        <LogisticsItem icon={<AiOutlineDelete />}>
          <time>{readableDate}</time>
        </LogisticsItem>

        <LogisticsItem icon={<SlLocationPin />}>
          <address>{locationText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
