import { Module } from "@nestjs/common";
import { StudentDecisionHistoryModuleBase } from "./base/studentDecisionHistory.module.base";
import { StudentDecisionHistoryService } from "./studentDecisionHistory.service";
import { StudentDecisionHistoryController } from "./studentDecisionHistory.controller";
import { StudentDecisionHistoryResolver } from "./studentDecisionHistory.resolver";

@Module({
  imports: [StudentDecisionHistoryModuleBase],
  controllers: [StudentDecisionHistoryController],
  providers: [StudentDecisionHistoryService, StudentDecisionHistoryResolver],
  exports: [StudentDecisionHistoryService],
})
export class StudentDecisionHistoryModule {}
