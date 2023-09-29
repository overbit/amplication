import { Module } from "@nestjs/common";
import { LuUsersUsertypeModuleBase } from "./base/luUsersUsertype.module.base";
import { LuUsersUsertypeService } from "./luUsersUsertype.service";
import { LuUsersUsertypeController } from "./luUsersUsertype.controller";
import { LuUsersUsertypeResolver } from "./luUsersUsertype.resolver";

@Module({
  imports: [LuUsersUsertypeModuleBase],
  controllers: [LuUsersUsertypeController],
  providers: [LuUsersUsertypeService, LuUsersUsertypeResolver],
  exports: [LuUsersUsertypeService],
})
export class LuUsersUsertypeModule {}
