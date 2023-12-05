import { Module } from "@nestjs/common";
import { StudentDecisionUniversityModuleBase } from "./base/studentDecisionUniversity.module.base";
import { StudentDecisionUniversityService } from "./studentDecisionUniversity.service";
import { StudentDecisionUniversityController } from "./studentDecisionUniversity.controller";
import { StudentDecisionUniversityResolver } from "./studentDecisionUniversity.resolver";

@Module({
  imports: [StudentDecisionUniversityModuleBase],
  controllers: [StudentDecisionUniversityController],
  providers: [
    StudentDecisionUniversityService,
    StudentDecisionUniversityResolver,
  ],
  exports: [StudentDecisionUniversityService],
})
export class StudentDecisionUniversityModule {}
