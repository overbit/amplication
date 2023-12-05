import { Module } from "@nestjs/common";
import { ProgramGroupProgramModuleBase } from "./base/programGroupProgram.module.base";
import { ProgramGroupProgramService } from "./programGroupProgram.service";
import { ProgramGroupProgramController } from "./programGroupProgram.controller";
import { ProgramGroupProgramResolver } from "./programGroupProgram.resolver";

@Module({
  imports: [ProgramGroupProgramModuleBase],
  controllers: [ProgramGroupProgramController],
  providers: [ProgramGroupProgramService, ProgramGroupProgramResolver],
  exports: [ProgramGroupProgramService],
})
export class ProgramGroupProgramModule {}
