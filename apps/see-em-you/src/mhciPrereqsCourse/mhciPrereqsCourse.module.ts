import { Module } from "@nestjs/common";
import { MhciPrereqsCourseModuleBase } from "./base/mhciPrereqsCourse.module.base";
import { MhciPrereqsCourseService } from "./mhciPrereqsCourse.service";
import { MhciPrereqsCourseController } from "./mhciPrereqsCourse.controller";
import { MhciPrereqsCourseResolver } from "./mhciPrereqsCourse.resolver";

@Module({
  imports: [MhciPrereqsCourseModuleBase],
  controllers: [MhciPrereqsCourseController],
  providers: [MhciPrereqsCourseService, MhciPrereqsCourseResolver],
  exports: [MhciPrereqsCourseService],
})
export class MhciPrereqsCourseModule {}
