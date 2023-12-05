import * as graphql from "@nestjs/graphql";
import { SearchTextTestResolverBase } from "./base/searchTextTest.resolver.base";
import { SearchTextTest } from "./base/SearchTextTest";
import { SearchTextTestService } from "./searchTextTest.service";

@graphql.Resolver(() => SearchTextTest)
export class SearchTextTestResolver extends SearchTextTestResolverBase {
  constructor(protected readonly service: SearchTextTestService) {
    super(service);
  }
}
