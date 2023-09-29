import { Module } from "@nestjs/common";
import { LuApplicationProgramModuleBase } from "./base/luApplicationProgram.module.base";
import { LuApplicationProgramService } from "./luApplicationProgram.service";
import { LuApplicationProgramController } from "./luApplicationProgram.controller";
import { LuApplicationProgramResolver } from "./luApplicationProgram.resolver";

@Module({
  imports: [LuApplicationProgramModuleBase],
  controllers: [LuApplicationProgramController],
  providers: [LuApplicationProgramService, LuApplicationProgramResolver],
  exports: [LuApplicationProgramService],
})
export class LuApplicationProgramModule {}
