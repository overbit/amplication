import { Module } from "@nestjs/common";
import { ProgramsApplicationreqModuleBase } from "./base/programsApplicationreq.module.base";
import { ProgramsApplicationreqService } from "./programsApplicationreq.service";
import { ProgramsApplicationreqController } from "./programsApplicationreq.controller";
import { ProgramsApplicationreqResolver } from "./programsApplicationreq.resolver";

@Module({
  imports: [ProgramsApplicationreqModuleBase],
  controllers: [ProgramsApplicationreqController],
  providers: [ProgramsApplicationreqService, ProgramsApplicationreqResolver],
  exports: [ProgramsApplicationreqService],
})
export class ProgramsApplicationreqModule {}
