export const getAllEvents = async () => {
  const response = await fetch('https://next-6e812-default-rtdb.firebaseio.com/events.json');
  const events = await response.json();
  const preparedEvents = [];

  for (const key in events) {
    preparedEvents.push({id: key, ...events[key]});
  }

  return preparedEvents;
}

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();

  return events.filter((event) => event.isFeatured);
}

export const getEventById = async (id) => {
  const events = await getAllEvents();

  return events.find((event) => event.id === id);
}

export const getFilteredEvents = async (dateFilter) => {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
