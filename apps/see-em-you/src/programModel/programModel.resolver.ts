import * as graphql from "@nestjs/graphql";
import { ProgramModelResolverBase } from "./base/programModel.resolver.base";
import { ProgramModel } from "./base/ProgramModel";
import { ProgramModelService } from "./programModel.service";

@graphql.Resolver(() => ProgramModel)
export class ProgramModelResolver extends ProgramModelResolverBase {
  constructor(protected readonly service: ProgramModelService) {
    super(service);
  }
}
