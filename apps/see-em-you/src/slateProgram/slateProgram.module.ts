import { Module } from "@nestjs/common";
import { SlateProgramModuleBase } from "./base/slateProgram.module.base";
import { SlateProgramService } from "./slateProgram.service";
import { SlateProgramController } from "./slateProgram.controller";
import { SlateProgramResolver } from "./slateProgram.resolver";

@Module({
  imports: [SlateProgramModuleBase],
  controllers: [SlateProgramController],
  providers: [SlateProgramService, SlateProgramResolver],
  exports: [SlateProgramService],
})
export class SlateProgramModule {}
