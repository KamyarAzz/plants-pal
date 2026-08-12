type Props = {
  name: string;
  time: string;
};

export default function WaterHistoryItem({ name, time }: Props) {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="w-18 flex items-center justify-center h-8 min-h-8 min-w-8 max-h-8 max-w-8 rounded-full bg-gray-300">
        💧
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium">Water {name}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
}
