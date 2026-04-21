const getPlant = async (req, res) => {
  try {
    return res.status(200).json({message: "Successfully got a plant"});
  } catch (error) {
    res.status(500).json({message: "Server error", error: error.message});
  }
};

const getAllPlant = async (req, res) => {
  try {
    return res.status(200).json({message: "Successfully got all plants"});
  } catch (error) {
    res.status(500).json({message: "Server error", error: error.message});
  }
};

const createPlant = async (req, res) => {
  try {
    return res.status(200).json({message: "Successfully created a new plant"});
  } catch (error) {
    res.status(500).json({message: "Server error", error: error.message});
  }
};

const updatePlant = async (req, res) => {
  try {
    return res.status(200).json({message: "Successfully updated a plant"});
  } catch (error) {
    res.status(500).json({message: "Server error", error: error.message});
  }
};

const deletePlant = async (req, res) => {
  try {
    return res.status(200).json({message: "Successfully deleted a plant"});
  } catch (error) {
    res.status(500).json({message: "Server error", error: error.message});
  }
};

export {createPlant, getPlant, getAllPlant, updatePlant, deletePlant};
