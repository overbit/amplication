import { Module } from "@nestjs/common";
import { ProgramGroupModuleBase } from "./base/programGroup.module.base";
import { ProgramGroupService } from "./programGroup.service";
import { ProgramGroupController } from "./programGroup.controller";
import { ProgramGroupResolver } from "./programGroup.resolver";

@Module({
  imports: [ProgramGroupModuleBase],
  controllers: [ProgramGroupController],
  providers: [ProgramGroupService, ProgramGroupResolver],
  exports: [ProgramGroupService],
})
export class ProgramGroupModule {}
