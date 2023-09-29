import * as graphql from "@nestjs/graphql";
import { ParentInfoResolverBase } from "./base/parentInfo.resolver.base";
import { ParentInfo } from "./base/ParentInfo";
import { ParentInfoService } from "./parentInfo.service";

@graphql.Resolver(() => ParentInfo)
export class ParentInfoResolver extends ParentInfoResolverBase {
  constructor(protected readonly service: ParentInfoService) {
    super(service);
  }
}
