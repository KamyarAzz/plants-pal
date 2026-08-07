import WaterHistoryItem from './WaterHistoryItem';

export default function WateringHistory() {
  const history = [
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
    {
      name: 'Changiz',
      time: '2 minutes ago',
    },
  ];
  return (
    <div className="flex flex-col border border-gray-300 bg-white rounded-md p-3">
      <h4 className="text-lg font-bold">Care History</h4>
      <div className="flex flex-col gap-2 overflow-auto">
        {history.map((item) => (
          <WaterHistoryItem name={item.name} time={item.time} />
        ))}
      </div>
    </div>
  );
}
