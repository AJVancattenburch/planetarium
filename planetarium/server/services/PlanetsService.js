import { dbContext } from "../db/DbContext"

class PlanetsService {
  
  async createPlanet(planetData) {
    const newPlanet = await dbContext.Planets.create(planetData)
    return newPlanet
  }

  async getPlanets(query) {
    const planets = await dbContext.Planets.find(query)
    return planets
  }

  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId: galaxyId })
    return planets
  }
}

export const planetsService = new PlanetsService()