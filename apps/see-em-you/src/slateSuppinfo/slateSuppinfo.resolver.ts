import * as graphql from "@nestjs/graphql";
import { SlateSuppinfoResolverBase } from "./base/slateSuppinfo.resolver.base";
import { SlateSuppinfo } from "./base/SlateSuppinfo";
import { SlateSuppinfoService } from "./slateSuppinfo.service";

@graphql.Resolver(() => SlateSuppinfo)
export class SlateSuppinfoResolver extends SlateSuppinfoResolverBase {
  constructor(protected readonly service: SlateSuppinfoService) {
    super(service);
  }
}
