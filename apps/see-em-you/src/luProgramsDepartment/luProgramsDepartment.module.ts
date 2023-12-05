import { Module } from "@nestjs/common";
import { LuProgramsDepartmentModuleBase } from "./base/luProgramsDepartment.module.base";
import { LuProgramsDepartmentService } from "./luProgramsDepartment.service";
import { LuProgramsDepartmentController } from "./luProgramsDepartment.controller";
import { LuProgramsDepartmentResolver } from "./luProgramsDepartment.resolver";

@Module({
  imports: [LuProgramsDepartmentModuleBase],
  controllers: [LuProgramsDepartmentController],
  providers: [LuProgramsDepartmentService, LuProgramsDepartmentResolver],
  exports: [LuProgramsDepartmentService],
})
export class LuProgramsDepartmentModule {}
