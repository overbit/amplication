import * as graphql from "@nestjs/graphql";
import { SlateMaterialResolverBase } from "./base/slateMaterial.resolver.base";
import { SlateMaterial } from "./base/SlateMaterial";
import { SlateMaterialService } from "./slateMaterial.service";

@graphql.Resolver(() => SlateMaterial)
export class SlateMaterialResolver extends SlateMaterialResolverBase {
  constructor(protected readonly service: SlateMaterialService) {
    super(service);
  }
}
