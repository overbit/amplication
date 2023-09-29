import * as graphql from "@nestjs/graphql";
import { MhciPrereqResolverBase } from "./base/mhciPrereq.resolver.base";
import { MhciPrereq } from "./base/MhciPrereq";
import { MhciPrereqService } from "./mhciPrereq.service";

@graphql.Resolver(() => MhciPrereq)
export class MhciPrereqResolver extends MhciPrereqResolverBase {
  constructor(protected readonly service: MhciPrereqService) {
    super(service);
  }
}
