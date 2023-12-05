import { Module } from "@nestjs/common";
import { SemPreviousCourseModuleBase } from "./base/semPreviousCourse.module.base";
import { SemPreviousCourseService } from "./semPreviousCourse.service";
import { SemPreviousCourseController } from "./semPreviousCourse.controller";
import { SemPreviousCourseResolver } from "./semPreviousCourse.resolver";

@Module({
  imports: [SemPreviousCourseModuleBase],
  controllers: [SemPreviousCourseController],
  providers: [SemPreviousCourseService, SemPreviousCourseResolver],
  exports: [SemPreviousCourseService],
})
export class SemPreviousCourseModule {}
