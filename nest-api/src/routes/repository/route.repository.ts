import { Injectable, Logger } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { AbstractRepository } from '@app/database';
import { Model, Connection } from 'mongoose';

import { Route } from '../entities/route.entity';

@Injectable()
export class RoutesRepository extends AbstractRepository<Route> {
  protected readonly logger = new Logger(RoutesRepository.name);

  constructor(
    @InjectModel(Route.name) routeModel: Model<Route>,
    @InjectConnection() connection: Connection,
  ) {
    super(routeModel, connection);
  }
}
