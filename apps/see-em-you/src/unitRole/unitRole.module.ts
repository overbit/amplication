import { Module } from "@nestjs/common";
import { UnitRoleModuleBase } from "./base/unitRole.module.base";
import { UnitRoleService } from "./unitRole.service";
import { UnitRoleController } from "./unitRole.controller";
import { UnitRoleResolver } from "./unitRole.resolver";

@Module({
  imports: [UnitRoleModuleBase],
  controllers: [UnitRoleController],
  providers: [UnitRoleService, UnitRoleResolver],
  exports: [UnitRoleService],
})
export class UnitRoleModule {}
