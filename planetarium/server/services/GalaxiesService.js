import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class GalaxiesService {

  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }

  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)
    if (!galaxy) {
      throw new BadRequest("Invalid Galaxy Id")
    }
    return galaxy
  }

  async getPlanetsByGalaxyId(galaxyId) {
    const galaxy = await dbContext.Galaxies.find({ _id: galaxyId })
    if (!galaxy) throw new BadRequest("Invalid Galaxy Id")
    return galaxy
  }














}

export const galaxiesService = new GalaxiesService()