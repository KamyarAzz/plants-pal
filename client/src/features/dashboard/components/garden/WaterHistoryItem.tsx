type Props = {
  name: string;
  time: string;
};

export default function WaterHistoryItem({ name, time }: Props) {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="w-10 flex items-center justify-center h-10 rounded-full bg-gray-400">💧</div>
      <div className="flex flex-col">
        <p>Water {name}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
