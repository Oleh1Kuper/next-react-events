import { getFeaturedEvents } from '@/dammyData';
import EventList from '@/components/EventList/EventList';
import styles from './page.module.css';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
