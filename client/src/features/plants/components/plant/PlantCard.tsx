import { Link } from 'react-router';

import type { Plant } from '@/types';

import RequirementsCharts from './RequirementsCharts';

type Props = { plant: Plant; view: 'list' | 'grid' };

export default function PlantCard({ plant }: Props) {
  return (
    <div className="flex flex-col gap-3 h-min p-3 border bg-white border-gray-300 rounded-lg shadow-md w-60">
      <div className="flex gap-2">
        <img
          src="https://picsum.photos/200"
          alt={plant.name}
          className="w-16 h-16 object-cover rounded-md"
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
      <Link
        className="bg-green-700/90 text-center cursor-pointer disabled:cursor-auto text-white px-4 py-2 rounded-md hover:bg-green-800/90 focus:outline-none focus:ring-2 focus:ring-green-500/20'"
        to={`/plants/${plant.id}`}
      >
        Log Care
      </Link>
    </div>
  );
}
