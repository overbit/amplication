import { Module } from "@nestjs/common";
import { ProgramTypeModuleBase } from "./base/programType.module.base";
import { ProgramTypeService } from "./programType.service";
import { ProgramTypeController } from "./programType.controller";
import { ProgramTypeResolver } from "./programType.resolver";

@Module({
  imports: [ProgramTypeModuleBase],
  controllers: [ProgramTypeController],
  providers: [ProgramTypeService, ProgramTypeResolver],
  exports: [ProgramTypeService],
})
export class ProgramTypeModule {}
