import * as graphql from "@nestjs/graphql";
import { SchoolResolverBase } from "./base/school.resolver.base";
import { School } from "./base/School";
import { SchoolService } from "./school.service";

@graphql.Resolver(() => School)
export class SchoolResolver extends SchoolResolverBase {
  constructor(protected readonly service: SchoolService) {
    super(service);
  }
}
