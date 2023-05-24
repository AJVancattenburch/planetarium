import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
class GalaxiesService {

  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }
}

export const galaxiesService = new GalaxiesService()