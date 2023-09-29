import * as graphql from "@nestjs/graphql";
import { ApplicationreqResolverBase } from "./base/applicationreq.resolver.base";
import { Applicationreq } from "./base/Applicationreq";
import { ApplicationreqService } from "./applicationreq.service";

@graphql.Resolver(() => Applicationreq)
export class ApplicationreqResolver extends ApplicationreqResolverBase {
  constructor(protected readonly service: ApplicationreqService) {
    super(service);
  }
}
