import { Module } from "@nestjs/common";
import { LuUsersUsertypesHistoryModuleBase } from "./base/luUsersUsertypesHistory.module.base";
import { LuUsersUsertypesHistoryService } from "./luUsersUsertypesHistory.service";
import { LuUsersUsertypesHistoryController } from "./luUsersUsertypesHistory.controller";
import { LuUsersUsertypesHistoryResolver } from "./luUsersUsertypesHistory.resolver";

@Module({
  imports: [LuUsersUsertypesHistoryModuleBase],
  controllers: [LuUsersUsertypesHistoryController],
  providers: [LuUsersUsertypesHistoryService, LuUsersUsertypesHistoryResolver],
  exports: [LuUsersUsertypesHistoryService],
})
export class LuUsersUsertypesHistoryModule {}
