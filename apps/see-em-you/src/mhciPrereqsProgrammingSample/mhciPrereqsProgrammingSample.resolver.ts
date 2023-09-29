import * as graphql from "@nestjs/graphql";
import { MhciPrereqsProgrammingSampleResolverBase } from "./base/mhciPrereqsProgrammingSample.resolver.base";
import { MhciPrereqsProgrammingSample } from "./base/MhciPrereqsProgrammingSample";
import { MhciPrereqsProgrammingSampleService } from "./mhciPrereqsProgrammingSample.service";

@graphql.Resolver(() => MhciPrereqsProgrammingSample)
export class MhciPrereqsProgrammingSampleResolver extends MhciPrereqsProgrammingSampleResolverBase {
  constructor(protected readonly service: MhciPrereqsProgrammingSampleService) {
    super(service);
  }
}
