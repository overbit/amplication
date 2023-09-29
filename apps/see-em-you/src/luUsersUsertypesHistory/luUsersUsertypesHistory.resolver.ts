import * as graphql from "@nestjs/graphql";
import { LuUsersUsertypesHistoryResolverBase } from "./base/luUsersUsertypesHistory.resolver.base";
import { LuUsersUsertypesHistory } from "./base/LuUsersUsertypesHistory";
import { LuUsersUsertypesHistoryService } from "./luUsersUsertypesHistory.service";

@graphql.Resolver(() => LuUsersUsertypesHistory)
export class LuUsersUsertypesHistoryResolver extends LuUsersUsertypesHistoryResolverBase {
  constructor(protected readonly service: LuUsersUsertypesHistoryService) {
    super(service);
  }
}
