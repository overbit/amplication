import { Module } from "@nestjs/common";
import { BfDepartmentModuleBase } from "./base/bfDepartment.module.base";
import { BfDepartmentService } from "./bfDepartment.service";
import { BfDepartmentController } from "./bfDepartment.controller";
import { BfDepartmentResolver } from "./bfDepartment.resolver";

@Module({
  imports: [BfDepartmentModuleBase],
  controllers: [BfDepartmentController],
  providers: [BfDepartmentService, BfDepartmentResolver],
  exports: [BfDepartmentService],
})
export class BfDepartmentModule {}
