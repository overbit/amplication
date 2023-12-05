import * as graphql from "@nestjs/graphql";
import { RevgroupResolverBase } from "./base/revgroup.resolver.base";
import { Revgroup } from "./base/Revgroup";
import { RevgroupService } from "./revgroup.service";

@graphql.Resolver(() => Revgroup)
export class RevgroupResolver extends RevgroupResolverBase {
  constructor(protected readonly service: RevgroupService) {
    super(service);
  }
}
