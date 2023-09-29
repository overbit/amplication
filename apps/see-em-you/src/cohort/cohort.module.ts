import { Module } from "@nestjs/common";
import { CohortModuleBase } from "./base/cohort.module.base";
import { CohortService } from "./cohort.service";
import { CohortController } from "./cohort.controller";
import { CohortResolver } from "./cohort.resolver";

@Module({
  imports: [CohortModuleBase],
  controllers: [CohortController],
  providers: [CohortService, CohortResolver],
  exports: [CohortService],
})
export class CohortModule {}
