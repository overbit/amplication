import * as graphql from "@nestjs/graphql";
import { DatafileTypeResolverBase } from "./base/datafileType.resolver.base";
import { DatafileType } from "./base/DatafileType";
import { DatafileTypeService } from "./datafileType.service";

@graphql.Resolver(() => DatafileType)
export class DatafileTypeResolver extends DatafileTypeResolverBase {
  constructor(protected readonly service: DatafileTypeService) {
    super(service);
  }
}
