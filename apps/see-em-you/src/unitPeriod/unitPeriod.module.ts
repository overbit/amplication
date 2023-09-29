import { Module } from "@nestjs/common";
import { UnitPeriodModuleBase } from "./base/unitPeriod.module.base";
import { UnitPeriodService } from "./unitPeriod.service";
import { UnitPeriodController } from "./unitPeriod.controller";
import { UnitPeriodResolver } from "./unitPeriod.resolver";

@Module({
  imports: [UnitPeriodModuleBase],
  controllers: [UnitPeriodController],
  providers: [UnitPeriodService, UnitPeriodResolver],
  exports: [UnitPeriodService],
})
export class UnitPeriodModule {}
