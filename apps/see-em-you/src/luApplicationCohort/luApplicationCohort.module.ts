import { Module } from "@nestjs/common";
import { LuApplicationCohortModuleBase } from "./base/luApplicationCohort.module.base";
import { LuApplicationCohortService } from "./luApplicationCohort.service";
import { LuApplicationCohortController } from "./luApplicationCohort.controller";
import { LuApplicationCohortResolver } from "./luApplicationCohort.resolver";

@Module({
  imports: [LuApplicationCohortModuleBase],
  controllers: [LuApplicationCohortController],
  providers: [LuApplicationCohortService, LuApplicationCohortResolver],
  exports: [LuApplicationCohortService],
})
export class LuApplicationCohortModule {}
