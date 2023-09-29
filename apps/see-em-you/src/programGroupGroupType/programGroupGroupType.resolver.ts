import * as graphql from "@nestjs/graphql";
import { ProgramGroupGroupTypeResolverBase } from "./base/programGroupGroupType.resolver.base";
import { ProgramGroupGroupType } from "./base/ProgramGroupGroupType";
import { ProgramGroupGroupTypeService } from "./programGroupGroupType.service";

@graphql.Resolver(() => ProgramGroupGroupType)
export class ProgramGroupGroupTypeResolver extends ProgramGroupGroupTypeResolverBase {
  constructor(protected readonly service: ProgramGroupGroupTypeService) {
    super(service);
  }
}
