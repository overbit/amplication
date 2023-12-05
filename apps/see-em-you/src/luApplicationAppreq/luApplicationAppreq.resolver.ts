import * as graphql from "@nestjs/graphql";
import { LuApplicationAppreqResolverBase } from "./base/luApplicationAppreq.resolver.base";
import { LuApplicationAppreq } from "./base/LuApplicationAppreq";
import { LuApplicationAppreqService } from "./luApplicationAppreq.service";

@graphql.Resolver(() => LuApplicationAppreq)
export class LuApplicationAppreqResolver extends LuApplicationAppreqResolverBase {
  constructor(protected readonly service: LuApplicationAppreqService) {
    super(service);
  }
}
