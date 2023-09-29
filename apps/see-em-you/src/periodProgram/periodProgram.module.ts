import { Module } from "@nestjs/common";
import { PeriodProgramModuleBase } from "./base/periodProgram.module.base";
import { PeriodProgramService } from "./periodProgram.service";
import { PeriodProgramController } from "./periodProgram.controller";
import { PeriodProgramResolver } from "./periodProgram.resolver";

@Module({
  imports: [PeriodProgramModuleBase],
  controllers: [PeriodProgramController],
  providers: [PeriodProgramService, PeriodProgramResolver],
  exports: [PeriodProgramService],
})
export class PeriodProgramModule {}
