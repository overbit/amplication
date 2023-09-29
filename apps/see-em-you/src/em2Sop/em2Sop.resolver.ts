import * as graphql from "@nestjs/graphql";
import { Em2SopResolverBase } from "./base/em2Sop.resolver.base";
import { Em2Sop } from "./base/Em2Sop";
import { Em2SopService } from "./em2Sop.service";

@graphql.Resolver(() => Em2Sop)
export class Em2SopResolver extends Em2SopResolverBase {
  constructor(protected readonly service: Em2SopService) {
    super(service);
  }
}
