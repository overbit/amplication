import { Module } from "@nestjs/common";
import { LuDomainDepartmentModuleBase } from "./base/luDomainDepartment.module.base";
import { LuDomainDepartmentService } from "./luDomainDepartment.service";
import { LuDomainDepartmentController } from "./luDomainDepartment.controller";
import { LuDomainDepartmentResolver } from "./luDomainDepartment.resolver";

@Module({
  imports: [LuDomainDepartmentModuleBase],
  controllers: [LuDomainDepartmentController],
  providers: [LuDomainDepartmentService, LuDomainDepartmentResolver],
  exports: [LuDomainDepartmentService],
})
export class LuDomainDepartmentModule {}
