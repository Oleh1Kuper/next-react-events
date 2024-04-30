import React from 'react';
import EventList from '@/components/EventList/EventList';
import ResultsTitle from '@/components/ResultsTitle/ResultsTitle';
import Button from '@/components/Button/Button';
import ErrorAlert from '@/components/ErrorAlert/ErrorAlert';
import { getFilteredEvents } from '@/services/apiUtil';

export const generateMetadata = async ({ params: { slugs } }) => {
  const [year, month] = slugs;

  return {
    title: 'Filtered events',
    description: `All events for ${month}/${year}`,
  };
};

const FilteredEventPage = async ({ params: { slugs } }) => {
  const [year, month] = slugs;
  const condition = isNaN(month) || month > 12 || month < 1 || isNaN(year);

  if (condition) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter data.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = await getFilteredEvents({ year, month });

  if (!filteredEvents.length) {
    return (
      <>
        <ErrorAlert>
          <p>Events were not found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default FilteredEventPage;
