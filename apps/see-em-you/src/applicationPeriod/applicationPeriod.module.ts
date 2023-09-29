import { Module } from "@nestjs/common";
import { ApplicationPeriodModuleBase } from "./base/applicationPeriod.module.base";
import { ApplicationPeriodService } from "./applicationPeriod.service";
import { ApplicationPeriodController } from "./applicationPeriod.controller";
import { ApplicationPeriodResolver } from "./applicationPeriod.resolver";

@Module({
  imports: [ApplicationPeriodModuleBase],
  controllers: [ApplicationPeriodController],
  providers: [ApplicationPeriodService, ApplicationPeriodResolver],
  exports: [ApplicationPeriodService],
})
export class ApplicationPeriodModule {}
