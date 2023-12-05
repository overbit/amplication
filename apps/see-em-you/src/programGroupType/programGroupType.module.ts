import { Module } from "@nestjs/common";
import { ProgramGroupTypeModuleBase } from "./base/programGroupType.module.base";
import { ProgramGroupTypeService } from "./programGroupType.service";
import { ProgramGroupTypeController } from "./programGroupType.controller";
import { ProgramGroupTypeResolver } from "./programGroupType.resolver";

@Module({
  imports: [ProgramGroupTypeModuleBase],
  controllers: [ProgramGroupTypeController],
  providers: [ProgramGroupTypeService, ProgramGroupTypeResolver],
  exports: [ProgramGroupTypeService],
})
export class ProgramGroupTypeModule {}
