import EventList from '@/components/EventList/EventList';
import { getFeaturedEvents } from '@/services/apiUtil';

export default async function Home() {
  const featuredEvents = await getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
