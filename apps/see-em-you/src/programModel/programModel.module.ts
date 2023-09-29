import { Module } from "@nestjs/common";
import { ProgramModelModuleBase } from "./base/programModel.module.base";
import { ProgramModelService } from "./programModel.service";
import { ProgramModelController } from "./programModel.controller";
import { ProgramModelResolver } from "./programModel.resolver";

@Module({
  imports: [ProgramModelModuleBase],
  controllers: [ProgramModelController],
  providers: [ProgramModelService, ProgramModelResolver],
  exports: [ProgramModelService],
})
export class ProgramModelModule {}
