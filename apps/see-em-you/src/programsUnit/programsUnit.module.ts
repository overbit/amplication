import { Module } from "@nestjs/common";
import { ProgramsUnitModuleBase } from "./base/programsUnit.module.base";
import { ProgramsUnitService } from "./programsUnit.service";
import { ProgramsUnitController } from "./programsUnit.controller";
import { ProgramsUnitResolver } from "./programsUnit.resolver";

@Module({
  imports: [ProgramsUnitModuleBase],
  controllers: [ProgramsUnitController],
  providers: [ProgramsUnitService, ProgramsUnitResolver],
  exports: [ProgramsUnitService],
})
export class ProgramsUnitModule {}
