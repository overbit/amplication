import { Module } from "@nestjs/common";
import { PeriodModuleBase } from "./base/period.module.base";
import { PeriodService } from "./period.service";
import { PeriodController } from "./period.controller";
import { PeriodResolver } from "./period.resolver";

@Module({
  imports: [PeriodModuleBase],
  controllers: [PeriodController],
  providers: [PeriodService, PeriodResolver],
  exports: [PeriodService],
})
export class PeriodModule {}
