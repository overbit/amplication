import * as graphql from "@nestjs/graphql";
import { ProgramGroupResolverBase } from "./base/programGroup.resolver.base";
import { ProgramGroup } from "./base/ProgramGroup";
import { ProgramGroupService } from "./programGroup.service";

@graphql.Resolver(() => ProgramGroup)
export class ProgramGroupResolver extends ProgramGroupResolverBase {
  constructor(protected readonly service: ProgramGroupService) {
    super(service);
  }
}
