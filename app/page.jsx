import { getFeaturedEvents } from '@/dammyData';
import EventList from '@/components/EventList/EventList';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
