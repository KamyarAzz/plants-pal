import ActiveSubscription from './boxes/ActiveSubscription';
import NeedsCare from './boxes/NeedsCare';
import TotalCollections from './boxes/TotalCollections';
import UpcomingTasks from './boxes/UpcomingTasks';

export default function InfoBoxesContainer() {
  const categories = [
    {
      name: 'Indoor',
      count: 16,
      color: '#16a34a',
    },
    {
      name: 'Outdoor',
      count: 6,
      color: '#4ade80',
    },
    {
      name: 'Succulents',
      count: 2,
      color: '#a3e635',
    },
  ];

  return (
    <div className="flex w-full gap-4">
      <TotalCollections total={24} categories={categories} />
      <NeedsCare total={5} />
      <UpcomingTasks value="Water Changiz" />
      <ActiveSubscription value={10} />
    </div>
  );
}
