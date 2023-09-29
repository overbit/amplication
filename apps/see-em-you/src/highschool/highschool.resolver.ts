import * as graphql from "@nestjs/graphql";
import { HighschoolResolverBase } from "./base/highschool.resolver.base";
import { Highschool } from "./base/Highschool";
import { HighschoolService } from "./highschool.service";

@graphql.Resolver(() => Highschool)
export class HighschoolResolver extends HighschoolResolverBase {
  constructor(protected readonly service: HighschoolService) {
    super(service);
  }
}
