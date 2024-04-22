import EventList from '@/components/EventList/EventList';
import NewsletterRegistration from '@/components/NewsletterRegistration/NewsletterRegistration';
import { getFeaturedEvents } from '@/services/apiUtil';

export default async function Home() {
  const featuredEvents = await getFeaturedEvents();

  return (
    <div>
      <NewsletterRegistration />
      <EventList events={featuredEvents} />
    </div>
  );
}
