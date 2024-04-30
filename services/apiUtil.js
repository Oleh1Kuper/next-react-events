export const getAllEvents = async () => {
  try {
    const response = await fetch('https://next-6e812-default-rtdb.firebaseio.com/events.json');
    const events = await response.json();
    const preparedEvents = [];

    for (const key in events) {
      preparedEvents.push({id: key, ...events[key]});
    }

    return preparedEvents;
  } catch (error) {
    throw error;
  }
}

export const getFeaturedEvents = async () => {
  try {
    const events = await getAllEvents();

    return events.filter((event) => event.isFeatured);
  } catch (error) {
    throw error;
  }
}

export const getEventById = async (id) => {
  try {
    const events = await getAllEvents();

    return events.find((event) => event.id === id);
  } catch (error) {
    throw error;
  }
}

export const getFilteredEvents = async (dateFilter) => {
  try {
    const { year, month } = dateFilter;
    const events = await getAllEvents();

    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
  
      return (
        eventDate.getFullYear() === +year && eventDate.getMonth() === +month - 1
      );
    });

    return filteredEvents;
  } catch (error) {
    throw error;
  }
}
