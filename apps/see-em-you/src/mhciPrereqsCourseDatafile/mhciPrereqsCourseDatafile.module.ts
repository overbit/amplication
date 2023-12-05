import { Module } from "@nestjs/common";
import { MhciPrereqsCourseDatafileModuleBase } from "./base/mhciPrereqsCourseDatafile.module.base";
import { MhciPrereqsCourseDatafileService } from "./mhciPrereqsCourseDatafile.service";
import { MhciPrereqsCourseDatafileController } from "./mhciPrereqsCourseDatafile.controller";
import { MhciPrereqsCourseDatafileResolver } from "./mhciPrereqsCourseDatafile.resolver";

@Module({
  imports: [MhciPrereqsCourseDatafileModuleBase],
  controllers: [MhciPrereqsCourseDatafileController],
  providers: [
    MhciPrereqsCourseDatafileService,
    MhciPrereqsCourseDatafileResolver,
  ],
  exports: [MhciPrereqsCourseDatafileService],
})
export class MhciPrereqsCourseDatafileModule {}
