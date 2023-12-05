import { Module } from "@nestjs/common";
import { LuUserDepartmentModuleBase } from "./base/luUserDepartment.module.base";
import { LuUserDepartmentService } from "./luUserDepartment.service";
import { LuUserDepartmentController } from "./luUserDepartment.controller";
import { LuUserDepartmentResolver } from "./luUserDepartment.resolver";

@Module({
  imports: [LuUserDepartmentModuleBase],
  controllers: [LuUserDepartmentController],
  providers: [LuUserDepartmentService, LuUserDepartmentResolver],
  exports: [LuUserDepartmentService],
})
export class LuUserDepartmentModule {}
