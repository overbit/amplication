import { Module } from "@nestjs/common";
import { DepartmentUnitModuleBase } from "./base/departmentUnit.module.base";
import { DepartmentUnitService } from "./departmentUnit.service";
import { DepartmentUnitController } from "./departmentUnit.controller";
import { DepartmentUnitResolver } from "./departmentUnit.resolver";

@Module({
  imports: [DepartmentUnitModuleBase],
  controllers: [DepartmentUnitController],
  providers: [DepartmentUnitService, DepartmentUnitResolver],
  exports: [DepartmentUnitService],
})
export class DepartmentUnitModule {}
