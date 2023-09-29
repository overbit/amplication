import { Module } from "@nestjs/common";
import { SlateAppSchoolModuleBase } from "./base/slateAppSchool.module.base";
import { SlateAppSchoolService } from "./slateAppSchool.service";
import { SlateAppSchoolController } from "./slateAppSchool.controller";
import { SlateAppSchoolResolver } from "./slateAppSchool.resolver";

@Module({
  imports: [SlateAppSchoolModuleBase],
  controllers: [SlateAppSchoolController],
  providers: [SlateAppSchoolService, SlateAppSchoolResolver],
  exports: [SlateAppSchoolService],
})
export class SlateAppSchoolModule {}
