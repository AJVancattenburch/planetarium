import mongoose from "mongoose";
const Schema = mongoose.Schema

export const PlanetSchema = new Schema (
  {
    name: {
      type: String,
      required: true,
      maxLength: 50
    },
    img: {
      type: String,
      default: 'https://www.pngkit.com/png/full/1-17731_planet-png.png'
    },
    biome: {
      type: String,
      required: true,
    },
    atmosphere: {
      type: Boolean,
      default: false
    }
  },

  {
    toJSON: {
      virtuals: true
    }
  }
)

PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  ref: 'Galaxy',
  justOne: true
})