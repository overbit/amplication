import * as graphql from "@nestjs/graphql";
import { DegreeResolverBase } from "./base/degree.resolver.base";
import { Degree } from "./base/Degree";
import { DegreeService } from "./degree.service";

@graphql.Resolver(() => Degree)
export class DegreeResolver extends DegreeResolverBase {
  constructor(protected readonly service: DegreeService) {
    super(service);
  }
}
