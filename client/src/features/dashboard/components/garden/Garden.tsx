import type { Plant } from '@/types';

import PlantCard from './PlantCard';
import WateringHistory from './WateringHistory';

export default function Garden() {
  const plants: Plant[] = [
    {
      id: '1',
      name: 'Tomato Plant',
      species: 'Solanum lycopersicum',
      lastWatered: new Date(),
      nextWatering: new Date(),
      soilType: 'Loamy',
      sunlightRequirements: 'Full sun',
      wateringFrequency: 2,
      notes: 'Needs more sunlight',
    },
    {
      id: '2',
      name: 'Basil Plant',
      species: 'Ocimum basilicum',
      lastWatered: new Date(),
      nextWatering: new Date(),
      soilType: 'Loamy',
      sunlightRequirements: 'Partial sun',
      wateringFrequency: 3,
      notes: 'Prefers well-drained soil',
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <h2 className="text-xl font-bold">Garden</h2>
      <div className="flex gap-2 justify-between overflow-auto">
        <div className="flex flex-wrap gap-4 overflow-auto">
          {plants.map((plant) => (
            <PlantCard plant={plant} />
          ))}
        </div>
        <WateringHistory />
      </div>
    </div>
  );
}
