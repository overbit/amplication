import * as graphql from "@nestjs/graphql";
import { LuDegreesApplicationreqResolverBase } from "./base/luDegreesApplicationreq.resolver.base";
import { LuDegreesApplicationreq } from "./base/LuDegreesApplicationreq";
import { LuDegreesApplicationreqService } from "./luDegreesApplicationreq.service";

@graphql.Resolver(() => LuDegreesApplicationreq)
export class LuDegreesApplicationreqResolver extends LuDegreesApplicationreqResolverBase {
  constructor(protected readonly service: LuDegreesApplicationreqService) {
    super(service);
  }
}
