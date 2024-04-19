import React from 'react';
import EventItem from '../EventItem/EventItem';
import classes from './EventList.module.css';

const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
