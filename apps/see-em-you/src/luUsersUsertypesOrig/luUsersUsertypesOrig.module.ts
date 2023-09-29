import { Module } from "@nestjs/common";
import { LuUsersUsertypesOrigModuleBase } from "./base/luUsersUsertypesOrig.module.base";
import { LuUsersUsertypesOrigService } from "./luUsersUsertypesOrig.service";
import { LuUsersUsertypesOrigController } from "./luUsersUsertypesOrig.controller";
import { LuUsersUsertypesOrigResolver } from "./luUsersUsertypesOrig.resolver";

@Module({
  imports: [LuUsersUsertypesOrigModuleBase],
  controllers: [LuUsersUsertypesOrigController],
  providers: [LuUsersUsertypesOrigService, LuUsersUsertypesOrigResolver],
  exports: [LuUsersUsertypesOrigService],
})
export class LuUsersUsertypesOrigModule {}
