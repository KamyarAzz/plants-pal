import { Plant } from "../models/plant.model.js";

const getPlant = async (req, res) => {
  try {
    const userId = req.user.id;
    const plantId = req.params.id;
    const plant = await Plant.findOne({
      _id: plantId,
      userId,
    });
    if (!plant) return res.status(404).json({ message: "Plant not found" });
    return res
      .status(200)
      .json({ message: "Successfully got the plant", plant });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllPlants = async (req, res) => {
  try {
    const id = req.user.id;
    const plants = await Plant.find({ userId: id });
    if (!plants || plants.length === 0)
      return res.status(404).json({ message: "No plants found" });
    return res
      .status(200)
      .json({ message: "Successfully got all plants", plants });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error1", error: error.message });
  }
};

const createPlant = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updatePlant = async (req, res) => {
  try {
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
    if (!newPlant) return res.status(404).json({ message: "Plant not found" });
    return res
      .status(200)
      .json({ message: "Plant updated successfully", newPlant });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deletePlant = async (req, res) => {
  try {
    const id = req.user.id;
    const plantId = req.params.id;
    const deletedPlant = await Plant.findOneAndDelete({
      _id: plantId,
      userId: id,
    });
    if (!deletedPlant)
      return res.status(404).json({ message: "Plant not found" });
    return res.status(200).json({ message: "Plant deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { createPlant, getPlant, getAllPlants, updatePlant, deletePlant };
