import { Module } from "@nestjs/common";
import { LuApplicationGroupModuleBase } from "./base/luApplicationGroup.module.base";
import { LuApplicationGroupService } from "./luApplicationGroup.service";
import { LuApplicationGroupController } from "./luApplicationGroup.controller";
import { LuApplicationGroupResolver } from "./luApplicationGroup.resolver";

@Module({
  imports: [LuApplicationGroupModuleBase],
  controllers: [LuApplicationGroupController],
  providers: [LuApplicationGroupService, LuApplicationGroupResolver],
  exports: [LuApplicationGroupService],
})
export class LuApplicationGroupModule {}
