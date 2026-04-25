import ApiError from "../utils/apiError.js";
import { Plant } from "../models/plant.model.js";

const getPlant = async (req, res) => {
  const userId = req.user.id;
  const plantId = req.params.id;
  const plant = await Plant.findOne({ _id: plantId, userId });
  if (!plant) throw new ApiError(404, "Plant not found");
  return res.status(200).json({ message: "Successfully got the plant", plant });
};

const getAllPlants = async (req, res) => {
  const id = req.user.id;
  const plants = await Plant.find({ userId: id });
  if (!plants || plants.length === 0)
    throw new ApiError(404, "No plants found");
  return res
    .status(200)
    .json({ message: "Successfully got all plants", plants });
};

const createPlant = async (req, res) => {
  const id = req.user.id;
  const {
    name,
    species,
    waterIntervalDays,
    sunlight,
    soilType,
    acquiredAt,
    lastWateredAt,
    notes,
  } = req.body;

  const plant = await Plant.create({
    name,
    species,
    waterIntervalDays,
    sunlight,
    soilType,
    acquiredAt,
    lastWateredAt,
    notes,
    userId: id,
  });
  return res
    .status(201)
    .json({ message: "Successfully created a new plant", plant });
};

const updatePlant = async (req, res) => {
  const id = req.user.id;
  const plantId = req.params.id;
  const {
    name,
    species,
    waterIntervalDays,
    sunlight,
    soilType,
    acquiredAt,
    lastWateredAt,
    notes,
  } = req.body;

  const newPlant = await Plant.findOneAndUpdate(
    { _id: plantId, userId: id },
    {
      name,
      species,
      waterIntervalDays,
      sunlight,
      soilType,
      acquiredAt,
      lastWateredAt,
      notes,
    },
    {
      returnDocument: "after",
      runValidators: true,
    },
  );

  if (!newPlant) throw new ApiError(404, "Plant not found");
  return res
    .status(200)
    .json({ message: "Plant updated successfully", newPlant });
};

const deletePlant = async (req, res) => {
  const id = req.user.id;
  const plantId = req.params.id;
  const deletedPlant = await Plant.findOneAndDelete({
    _id: plantId,
    userId: id,
  });

  if (!deletedPlant) throw new ApiError(404, "Plant not found");
  return res.status(200).json({ message: "Plant deleted successfully" });
};

export { createPlant, getPlant, getAllPlants, updatePlant, deletePlant };
