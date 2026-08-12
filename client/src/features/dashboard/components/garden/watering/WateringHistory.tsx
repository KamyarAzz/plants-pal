import WaterHistoryItem from './WaterHistoryItem';

export default function WateringHistory() {
  const history = [
    {
      name: 'Monstera',
      time: 'Just now',
    },
    {
      name: 'Sweet Basil',
      time: '15 minutes ago',
    },
    {
      name: 'Tomato Plant',
      time: '2 hours ago',
    },
    {
      name: 'Aloe Vera',
      time: '5 hours ago',
    },
    {
      name: 'Peace Lily',
      time: 'Yesterday',
    },
    {
      name: 'Snake Plant',
      time: '2 days ago',
    },
    {
      name: 'Changiz khan',
      time: '3 days ago',
    },
    {
      name: 'Spider Plant',
      time: '1 week ago',
    },
    {
      name: 'Spider Plant',
      time: '1 week ago',
    },
    {
      name: 'Spider Plant',
      time: '1 week ago',
    },
  ];
  return (
    <div className="flex flex-col border gap-2 min-w-64 border-gray-300 bg-white rounded-md p-3">
      <h4 className="text-lg font-bold">Care History</h4>
      <div className="flex flex-col gap-2 overflow-auto p-1">
        {history.map((item, index) => (
          <WaterHistoryItem key={index} name={item.name} time={item.time} />
        ))}
      </div>
    </div>
  );
}
