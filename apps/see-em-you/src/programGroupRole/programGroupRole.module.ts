import { Module } from "@nestjs/common";
import { ProgramGroupRoleModuleBase } from "./base/programGroupRole.module.base";
import { ProgramGroupRoleService } from "./programGroupRole.service";
import { ProgramGroupRoleController } from "./programGroupRole.controller";
import { ProgramGroupRoleResolver } from "./programGroupRole.resolver";

@Module({
  imports: [ProgramGroupRoleModuleBase],
  controllers: [ProgramGroupRoleController],
  providers: [ProgramGroupRoleService, ProgramGroupRoleResolver],
  exports: [ProgramGroupRoleService],
})
export class ProgramGroupRoleModule {}
