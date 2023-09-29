import * as graphql from "@nestjs/graphql";
import { DuolingoDatumResolverBase } from "./base/duolingoDatum.resolver.base";
import { DuolingoDatum } from "./base/DuolingoDatum";
import { DuolingoDatumService } from "./duolingoDatum.service";

@graphql.Resolver(() => DuolingoDatum)
export class DuolingoDatumResolver extends DuolingoDatumResolverBase {
  constructor(protected readonly service: DuolingoDatumService) {
    super(service);
  }
}
