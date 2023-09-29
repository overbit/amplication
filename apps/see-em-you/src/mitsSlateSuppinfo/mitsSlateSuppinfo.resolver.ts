import * as graphql from "@nestjs/graphql";
import { MitsSlateSuppinfoResolverBase } from "./base/mitsSlateSuppinfo.resolver.base";
import { MitsSlateSuppinfo } from "./base/MitsSlateSuppinfo";
import { MitsSlateSuppinfoService } from "./mitsSlateSuppinfo.service";

@graphql.Resolver(() => MitsSlateSuppinfo)
export class MitsSlateSuppinfoResolver extends MitsSlateSuppinfoResolverBase {
  constructor(protected readonly service: MitsSlateSuppinfoService) {
    super(service);
  }
}
