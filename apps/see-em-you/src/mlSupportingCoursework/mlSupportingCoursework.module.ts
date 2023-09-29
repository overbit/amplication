import { Module } from "@nestjs/common";
import { MlSupportingCourseworkModuleBase } from "./base/mlSupportingCoursework.module.base";
import { MlSupportingCourseworkService } from "./mlSupportingCoursework.service";
import { MlSupportingCourseworkController } from "./mlSupportingCoursework.controller";
import { MlSupportingCourseworkResolver } from "./mlSupportingCoursework.resolver";

@Module({
  imports: [MlSupportingCourseworkModuleBase],
  controllers: [MlSupportingCourseworkController],
  providers: [MlSupportingCourseworkService, MlSupportingCourseworkResolver],
  exports: [MlSupportingCourseworkService],
})
export class MlSupportingCourseworkModule {}
