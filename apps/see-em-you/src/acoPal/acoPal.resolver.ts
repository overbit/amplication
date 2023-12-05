import * as graphql from "@nestjs/graphql";
import { AcoPalResolverBase } from "./base/acoPal.resolver.base";
import { AcoPal } from "./base/AcoPal";
import { AcoPalService } from "./acoPal.service";

@graphql.Resolver(() => AcoPal)
export class AcoPalResolver extends AcoPalResolverBase {
  constructor(protected readonly service: AcoPalService) {
    super(service);
  }
}
