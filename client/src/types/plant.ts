type Plant = {
  id: string;
  name: string;
  species: string;
  lastWatered: Date;
  nextWatering: Date;
  soilType: string;
  sunlightRequirements: string;
  wateringFrequency: number;
  notes: string;
};

type PlantCategory = {
  name: string;
  count: number;
  color: string;
};

export type { Plant, PlantCategory };
