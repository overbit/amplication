import { Module } from "@nestjs/common";
import { LuProgramsInterestModuleBase } from "./base/luProgramsInterest.module.base";
import { LuProgramsInterestService } from "./luProgramsInterest.service";
import { LuProgramsInterestController } from "./luProgramsInterest.controller";
import { LuProgramsInterestResolver } from "./luProgramsInterest.resolver";

@Module({
  imports: [LuProgramsInterestModuleBase],
  controllers: [LuProgramsInterestController],
  providers: [LuProgramsInterestService, LuProgramsInterestResolver],
  exports: [LuProgramsInterestService],
})
export class LuProgramsInterestModule {}
