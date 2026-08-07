type Props = { percentage: number; icon?: string; color?: string };

export default function CircleProgressIndicator({ percentage, icon, color }: Props) {
  return (
    <div
      className="relative flex h-14 w-14 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(
          ${color || '#3b82f6'} ${percentage * 3.6}deg,
          #dbeafe ${percentage * 3.6}deg
        )`,
      }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">{icon}</div>
    </div>
  );
}
