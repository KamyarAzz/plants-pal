import type { Plant } from '@/types';

import PlantCard from '../../../plants/components/plant/PlantCard';
import WateringHistory from './watering/WateringHistory';

export default function Garden() {
  const plants: Plant[] = [
    {
      id: '1',
      name: 'Tomato Plant',
      species: 'Solanum lycopersicum',
      lastWatered: new Date('2026-08-11T08:00:00Z'),
      nextWatering: new Date('2026-08-13T08:00:00Z'),
      soilType: 'Loamy',
      sunlightRequirements: 'Full sun',
      wateringFrequency: 2,
      notes: 'Starting to blossom, might need a larger cage soon.',
    },
    {
      id: '2',
      name: 'Sweet Basil',
      species: 'Ocimum basilicum',
      lastWatered: new Date('2026-08-10T09:30:00Z'),
      nextWatering: new Date('2026-08-13T09:30:00Z'),
      soilType: 'Loamy, well-draining',
      sunlightRequirements: 'Partial to full sun',
      wateringFrequency: 3,
      notes: 'Pinch off the top leaves to encourage bushier growth.',
    },
    {
      id: '3',
      name: 'Monstera',
      species: 'Monstera deliciosa',
      lastWatered: new Date('2026-08-05T10:15:00Z'),
      nextWatering: new Date('2026-08-15T10:15:00Z'),
      soilType: 'Peat-based potting mix',
      sunlightRequirements: 'Bright indirect light',
      wateringFrequency: 10,
      notes: 'New fenestrated leaf is unfurling. Wipe dust off older leaves.',
    },
    {
      id: '4',
      name: 'Snake Plant',
      species: 'Sansevieria trifasciata',
      lastWatered: new Date('2026-07-28T14:00:00Z'),
      nextWatering: new Date('2026-08-18T14:00:00Z'),
      soilType: 'Sandy, succulent mix',
      sunlightRequirements: 'Low to bright indirect light',
      wateringFrequency: 21,
      notes: 'Extremely drought tolerant. Make sure soil is completely dry before watering.',
    },
    {
      id: '5',
      name: 'Peace Lily',
      species: 'Spathiphyllum wallisii',
      lastWatered: new Date('2026-08-08T07:45:00Z'),
      nextWatering: new Date('2026-08-14T07:45:00Z'),
      soilType: 'Rich, moisture-retaining potting soil',
      sunlightRequirements: 'Low to medium indirect light',
      wateringFrequency: 6,
      notes: 'Leaves droop dramatically when thirsty, but recover quickly.',
    },
    {
      id: '6',
      name: 'Aloe Vera',
      species: 'Aloe barbadensis miller',
      lastWatered: new Date('2026-08-01T11:00:00Z'),
      nextWatering: new Date('2026-08-15T11:00:00Z'),
      soilType: 'Cactus/succulent mix',
      sunlightRequirements: 'Bright, direct sunlight',
      wateringFrequency: 14,
      notes: 'Check for signs of overwatering (mushy leaves). Currently thriving.',
    },
    {
      id: '7',
      name: 'Spider Plant',
      species: 'Chlorophytum comosum',
      lastWatered: new Date('2026-08-06T16:20:00Z'),
      nextWatering: new Date('2026-08-13T16:20:00Z'),
      soilType: 'Standard well-draining potting mix',
      sunlightRequirements: 'Moderate indirect light',
      wateringFrequency: 7,
      notes: 'Producing "spiderettes" (babies) on long stems. Can propagate soon.',
    },
    {
      id: '8',
      name: 'Tomato Plant',
      species: 'Solanum lycopersicum',
      lastWatered: new Date('2026-08-11T08:00:00Z'),
      nextWatering: new Date('2026-08-13T08:00:00Z'),
      soilType: 'Loamy',
      sunlightRequirements: 'Full sun',
      wateringFrequency: 2,
      notes: 'Starting to blossom, might need a larger cage soon.',
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full h-full overflow-auto">
      <h2 className="text-xl font-bold">Garden</h2>
      <div className="flex gap-2 justify-between overflow-auto">
        <div className="flex flex-wrap gap-4 overflow-auto">
          {plants.map((plant) => (
            <PlantCard view="grid" key={plant.id} plant={plant} />
          ))}
        </div>
        <WateringHistory />
      </div>
    </div>
  );
}
