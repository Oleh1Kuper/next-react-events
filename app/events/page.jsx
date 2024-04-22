import React from 'react';
import EventList from '@/components/EventList/EventList';
import EventsSearch from '@/components/EventsSearch/EventsSearch';
import { getAllEvents } from '@/services/apiUtil';

export const metadata = {
  title: 'All Events',
  description: 'Find a lot of great events',
};

const EvetsPage = async () => {
  const events = await getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={events} />
    </>
  );
};

export default EvetsPage;
