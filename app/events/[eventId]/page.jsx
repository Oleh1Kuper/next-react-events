import React from 'react';
import EventLogistics from '@/components/EventLogistics/EventLogistics';
import EventSummary from '@/components/EventSummary/EventSummary';
import { getEventById } from '@/dammyData';
import EventContent from '@/components/EventContent/EventContent';
import ErrorAlert from '@/components/ErrorAlert/ErrorAlert';

const EventDetailPage = ({ params: { eventId } }) => {
  const event = getEventById(eventId);

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
