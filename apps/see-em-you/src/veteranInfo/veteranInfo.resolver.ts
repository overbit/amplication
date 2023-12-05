import * as graphql from "@nestjs/graphql";
import { VeteranInfoResolverBase } from "./base/veteranInfo.resolver.base";
import { VeteranInfo } from "./base/VeteranInfo";
import { VeteranInfoService } from "./veteranInfo.service";

@graphql.Resolver(() => VeteranInfo)
export class VeteranInfoResolver extends VeteranInfoResolverBase {
  constructor(protected readonly service: VeteranInfoService) {
    super(service);
  }
}
