import { Module } from "@nestjs/common";
import { AaDepartmentModuleBase } from "./base/aaDepartment.module.base";
import { AaDepartmentService } from "./aaDepartment.service";
import { AaDepartmentController } from "./aaDepartment.controller";
import { AaDepartmentResolver } from "./aaDepartment.resolver";

@Module({
  imports: [AaDepartmentModuleBase],
  controllers: [AaDepartmentController],
  providers: [AaDepartmentService, AaDepartmentResolver],
  exports: [AaDepartmentService],
})
export class AaDepartmentModule {}
