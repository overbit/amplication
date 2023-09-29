import { Module } from "@nestjs/common";
import { PeriodTypeModuleBase } from "./base/periodType.module.base";
import { PeriodTypeService } from "./periodType.service";
import { PeriodTypeController } from "./periodType.controller";
import { PeriodTypeResolver } from "./periodType.resolver";

@Module({
  imports: [PeriodTypeModuleBase],
  controllers: [PeriodTypeController],
  providers: [PeriodTypeService, PeriodTypeResolver],
  exports: [PeriodTypeService],
})
export class PeriodTypeModule {}
