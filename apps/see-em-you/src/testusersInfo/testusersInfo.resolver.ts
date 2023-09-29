import * as graphql from "@nestjs/graphql";
import { TestusersInfoResolverBase } from "./base/testusersInfo.resolver.base";
import { TestusersInfo } from "./base/TestusersInfo";
import { TestusersInfoService } from "./testusersInfo.service";

@graphql.Resolver(() => TestusersInfo)
export class TestusersInfoResolver extends TestusersInfoResolverBase {
  constructor(protected readonly service: TestusersInfoService) {
    super(service);
  }
}
