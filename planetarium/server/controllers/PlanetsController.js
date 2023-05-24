import BaseController from '../utils/BaseController'
import { planetsService } from '../services/PlanetsService.js'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
      .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
  }

  
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)
      res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const query = req.query
      const planets = await planetsService.getPlanets(query)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const planetId = req.params.id
      const planets = await planetsService.getPlanetsByGalaxyId(planetId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  
































}