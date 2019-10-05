import {Model, model, property} from '@loopback/repository';

@model()
export class Build extends Model {
  @property({
    type: 'string',
  })
  target?: string;

  @property({
    type: 'string',
  })
  projectFilePath?: string;

  @property({
    type: 'boolean',
  })
  forceFullDeployment?: boolean;


  constructor(data?: Partial<Build>) {
    super(data);
  }
}

export interface BuildRelations {
  // describe navigational properties here
}

export type BuildWithRelations = Build & BuildRelations;
