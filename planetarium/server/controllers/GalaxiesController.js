
import BaseController from './../utils/BaseController';
import { galaxiesService } from '../services/GalaxiesService.js';
import { planetsService } from '../services/PlanetsService.js';
export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')

    this.router
    .post('', this.createGalaxy)
    .get('', this.getGalaxies)
    .get('/:id', this.getGalaxyById)
    .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)

  }

  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
      res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxies(req, res, next) {
    try {
      const query = req.query
      const galaxies = await galaxiesService.getGalaxies(query)
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      const galaxyId = req.params.id
      const galaxy = await galaxiesService.getGalaxyById(galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }











}