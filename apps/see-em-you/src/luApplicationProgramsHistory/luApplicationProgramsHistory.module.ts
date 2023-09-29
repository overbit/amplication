import { Module } from "@nestjs/common";
import { LuApplicationProgramsHistoryModuleBase } from "./base/luApplicationProgramsHistory.module.base";
import { LuApplicationProgramsHistoryService } from "./luApplicationProgramsHistory.service";
import { LuApplicationProgramsHistoryController } from "./luApplicationProgramsHistory.controller";
import { LuApplicationProgramsHistoryResolver } from "./luApplicationProgramsHistory.resolver";

@Module({
  imports: [LuApplicationProgramsHistoryModuleBase],
  controllers: [LuApplicationProgramsHistoryController],
  providers: [
    LuApplicationProgramsHistoryService,
    LuApplicationProgramsHistoryResolver,
  ],
  exports: [LuApplicationProgramsHistoryService],
})
export class LuApplicationProgramsHistoryModule {}
