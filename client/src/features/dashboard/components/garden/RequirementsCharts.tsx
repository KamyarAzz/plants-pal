import CircleProgressIndicator from './CircleProgressIndicator';

type Props = {
  soil: number;
  sunlight: number;
  watering: number;
};

export default function RequirementsCharts({ soil, sunlight, watering }: Props) {
  return (
    <div className="flex gap-4 justify-center">
      <CircleProgressIndicator percentage={soil} icon="🌱" color="#10b981" />
      <CircleProgressIndicator percentage={sunlight} icon="☀️" color="#f59e0b" />
      <CircleProgressIndicator percentage={watering} icon="💦" color="#60a5fa" />
    </div>
  );
}
