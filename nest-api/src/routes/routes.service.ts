import { Injectable } from '@nestjs/common';

import { RouteDocument } from './entities/route.entity';
import { RoutesRepository } from './repository/route.repository';

@Injectable()
export class RoutesService {
  constructor(private routeRepository: RoutesRepository) {}

  async findAll(): Promise<RouteDocument[]> {
    return this.routeRepository.find({});
  }
}
