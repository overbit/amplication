import * as graphql from "@nestjs/graphql";
import { MhciPrereqsProgrammingTestResolverBase } from "./base/mhciPrereqsProgrammingTest.resolver.base";
import { MhciPrereqsProgrammingTest } from "./base/MhciPrereqsProgrammingTest";
import { MhciPrereqsProgrammingTestService } from "./mhciPrereqsProgrammingTest.service";

@graphql.Resolver(() => MhciPrereqsProgrammingTest)
export class MhciPrereqsProgrammingTestResolver extends MhciPrereqsProgrammingTestResolverBase {
  constructor(protected readonly service: MhciPrereqsProgrammingTestService) {
    super(service);
  }
}
