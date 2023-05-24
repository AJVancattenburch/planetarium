
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












}