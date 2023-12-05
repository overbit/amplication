import * as graphql from "@nestjs/graphql";
import { ProgramGroupTypeResolverBase } from "./base/programGroupType.resolver.base";
import { ProgramGroupType } from "./base/ProgramGroupType";
import { ProgramGroupTypeService } from "./programGroupType.service";

@graphql.Resolver(() => ProgramGroupType)
export class ProgramGroupTypeResolver extends ProgramGroupTypeResolverBase {
  constructor(protected readonly service: ProgramGroupTypeService) {
    super(service);
  }
}
