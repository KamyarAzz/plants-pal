import mongoose, { Schema } from "mongoose";

const plantSchema = new Schema(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      reqiured: true,
      ref: "User",
    },
    name: {
      type: String,
      trim: true,
    },
    species: {
      type: String,
      trim: true,
    },
    waterIntervalDays: {
      type: Number,
      required: true,
      min: 1,
    },
    sunlight: {
      type: String,
      enum: ["Low", "Medium", "Bright Indirect", "Direct"],
      required: true,
    },
    soilType: {
      type: String,
      trim: true,
    },
    acquiredAt: {
      type: Date,
      default: Date.now,
    },
    lastWateredAt: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

plantSchema.pre("save", async function (next) {
  // 'this' refers to the current plant document about to be saved

  // 1. Check if the name is missing or just empty spaces
  if (!this.name || this.name.trim() === "") {
    try {
      // 2. Access the model using this.constructor to query the database
      // We count how many plants belong to this specific ownerId
      const PlantModel = this.constructor;
      const existingPlantCount = await PlantModel.countDocuments({
        ownerId: this.ownerId,
      });

      // 3. Set the default name based on the count
      this.name = `Plant ${existingPlantCount + 1}`;

      next(); // Proceed with saving
    } catch (error) {
      next(error); // Pass any database errors to Express
    }
  } else {
    // If the user provided a name, just move on
    next();
  }
});

plantSchema.index({ ownerId: 1 });

export const Plant = mongoose.model("Plant", plantSchema);
