import { Module } from "@nestjs/common";
import { DepartmentEnableRecyclingModuleBase } from "./base/departmentEnableRecycling.module.base";
import { DepartmentEnableRecyclingService } from "./departmentEnableRecycling.service";
import { DepartmentEnableRecyclingController } from "./departmentEnableRecycling.controller";
import { DepartmentEnableRecyclingResolver } from "./departmentEnableRecycling.resolver";

@Module({
  imports: [DepartmentEnableRecyclingModuleBase],
  controllers: [DepartmentEnableRecyclingController],
  providers: [
    DepartmentEnableRecyclingService,
    DepartmentEnableRecyclingResolver,
  ],
  exports: [DepartmentEnableRecyclingService],
})
export class DepartmentEnableRecyclingModule {}
