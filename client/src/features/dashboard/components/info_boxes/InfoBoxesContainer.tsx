import TotalCollections from './TotalCollections';

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
    <div className="flex flex-wrap w-full">
      <TotalCollections total={24} categories={categories} />
      {/* <TotalCollections count={10} />
      <TotalCollections count={10} />
      <TotalCollections count={10} /> */}
    </div>
  );
}
