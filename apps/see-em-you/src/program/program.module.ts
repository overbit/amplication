import { Module } from "@nestjs/common";
import { ProgramModuleBase } from "./base/program.module.base";
import { ProgramService } from "./program.service";
import { ProgramController } from "./program.controller";
import { ProgramResolver } from "./program.resolver";

@Module({
  imports: [ProgramModuleBase],
  controllers: [ProgramController],
  providers: [ProgramService, ProgramResolver],
  exports: [ProgramService],
})
export class ProgramModule {}
