import { Module } from "@nestjs/common";
import { DepartmentReplyperiodModuleBase } from "./base/departmentReplyperiod.module.base";
import { DepartmentReplyperiodService } from "./departmentReplyperiod.service";
import { DepartmentReplyperiodController } from "./departmentReplyperiod.controller";
import { DepartmentReplyperiodResolver } from "./departmentReplyperiod.resolver";

@Module({
  imports: [DepartmentReplyperiodModuleBase],
  controllers: [DepartmentReplyperiodController],
  providers: [DepartmentReplyperiodService, DepartmentReplyperiodResolver],
  exports: [DepartmentReplyperiodService],
})
export class DepartmentReplyperiodModule {}
