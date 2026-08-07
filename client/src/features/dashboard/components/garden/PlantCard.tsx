import Button from '@/components/ui/Button';
import type { Plant } from '@/types';

import RequirementsCharts from './RequirementsCharts';

type Props = { plant: Plant };

export default function PlantCard({ plant }: Props) {
  return (
    <div className="flex flex-col gap-3 p-3 border bg-white border-gray-300 rounded-lg shadow-md w-64">
      <div className="flex gap-2">
        <img
          src="https://picsum.photos/200"
          alt={plant.name}
          className="w-20 object-cover rounded-md"
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold">{plant.name}</p>
          <p className="text-sm text-gray-600">{plant.species}</p>
        </div>
      </div>
      <RequirementsCharts
        soil={plant.soilType === 'Loamy' ? 100 : 0}
        sunlight={plant.sunlightRequirements === 'Full sun' ? 100 : 0}
        watering={plant.wateringFrequency}
      />
      <p>Next water: {plant.nextWatering.toLocaleDateString()}</p>
      <Button onClick={() => console.log('Logging care for', plant.name)}>Log Care</Button>
    </div>
  );
}
