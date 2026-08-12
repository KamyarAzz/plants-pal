import { useState } from 'react';

import Button from '@/components/inputs/Button';
import Input from '@/components/inputs/Input';
import type { Plant } from '@/types';

import PlantCard from '../components/plant/PlantCard';
import Views from '../components/Views';

type View = 'list' | 'grid';

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

export default function PlantsPage() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState<View>('list');

  const filteredPlants = plants
    .filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))
    .toSorted((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-2xl font-bold">My Plants</h1>
        <Button onClick={() => console.log('Add Plant')}>+ Add Plant</Button>
      </div>
      <div className="flex w-full justify-between">
        <Input
          className="min-w-60 w-full max-w-80"
          name="search"
          setValue={setSearch}
          type="search"
          value={search}
          placeholder="Search..."
        />
        <Views value={view} setValue={setView} />
      </div>
      <div
        className={`${view === 'list' ? 'flex-col gap-2' : 'flex-row gap-4 flex-wrap'} w-full flex  h-full overflow-auto`}
      >
        {filteredPlants.map((plant) => (
          <PlantCard view={view} key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
}
