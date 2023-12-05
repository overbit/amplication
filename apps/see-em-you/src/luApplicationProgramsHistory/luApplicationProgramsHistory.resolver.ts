import * as graphql from "@nestjs/graphql";
import { LuApplicationProgramsHistoryResolverBase } from "./base/luApplicationProgramsHistory.resolver.base";
import { LuApplicationProgramsHistory } from "./base/LuApplicationProgramsHistory";
import { LuApplicationProgramsHistoryService } from "./luApplicationProgramsHistory.service";

@graphql.Resolver(() => LuApplicationProgramsHistory)
export class LuApplicationProgramsHistoryResolver extends LuApplicationProgramsHistoryResolverBase {
  constructor(protected readonly service: LuApplicationProgramsHistoryService) {
    super(service);
  }
}
