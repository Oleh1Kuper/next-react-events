import React from 'react';
import Button from '../Button/Button';
import classes from './ResultsTitle.module.css';

const ResultsTitle = ({ date }) => {
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {readableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
