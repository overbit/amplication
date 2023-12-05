import { Module } from "@nestjs/common";
import { MseBridgeCourseModuleBase } from "./base/mseBridgeCourse.module.base";
import { MseBridgeCourseService } from "./mseBridgeCourse.service";
import { MseBridgeCourseController } from "./mseBridgeCourse.controller";
import { MseBridgeCourseResolver } from "./mseBridgeCourse.resolver";

@Module({
  imports: [MseBridgeCourseModuleBase],
  controllers: [MseBridgeCourseController],
  providers: [MseBridgeCourseService, MseBridgeCourseResolver],
  exports: [MseBridgeCourseService],
})
export class MseBridgeCourseModule {}
