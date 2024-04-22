import React from 'react';
import EventLogistics from '@/components/EventLogistics/EventLogistics';
import EventSummary from '@/components/EventSummary/EventSummary';
import EventContent from '@/components/EventContent/EventContent';
import ErrorAlert from '@/components/ErrorAlert/ErrorAlert';
import { getEventById } from '@/services/apiUtil';

export const generateMetadata = async ({ params }) => {
  const event = await getEventById(params.eventId);

  return {
    title: event.title,
    description: event.description,
  };
};

const EventDetailPage = async ({ params: { eventId } }) => {
  const event = await getEventById(eventId);

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
