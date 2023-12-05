import { Module } from "@nestjs/common";
import { PeriodApplicationModuleBase } from "./base/periodApplication.module.base";
import { PeriodApplicationService } from "./periodApplication.service";
import { PeriodApplicationController } from "./periodApplication.controller";
import { PeriodApplicationResolver } from "./periodApplication.resolver";

@Module({
  imports: [PeriodApplicationModuleBase],
  controllers: [PeriodApplicationController],
  providers: [PeriodApplicationService, PeriodApplicationResolver],
  exports: [PeriodApplicationService],
})
export class PeriodApplicationModule {}
