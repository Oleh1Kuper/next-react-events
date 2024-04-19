import React from 'react';
import { getAllEvents } from '@/dammyData';
import EventList from '@/components/EventList/EventList';
import EventsSearch from '@/components/EventsSearch/EventsSearch';

const EvetsPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export default EvetsPage;
