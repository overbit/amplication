import { Module } from "@nestjs/common";
import { ProgramGroupGroupTypeModuleBase } from "./base/programGroupGroupType.module.base";
import { ProgramGroupGroupTypeService } from "./programGroupGroupType.service";
import { ProgramGroupGroupTypeController } from "./programGroupGroupType.controller";
import { ProgramGroupGroupTypeResolver } from "./programGroupGroupType.resolver";

@Module({
  imports: [ProgramGroupGroupTypeModuleBase],
  controllers: [ProgramGroupGroupTypeController],
  providers: [ProgramGroupGroupTypeService, ProgramGroupGroupTypeResolver],
  exports: [ProgramGroupGroupTypeService],
})
export class ProgramGroupGroupTypeModule {}
