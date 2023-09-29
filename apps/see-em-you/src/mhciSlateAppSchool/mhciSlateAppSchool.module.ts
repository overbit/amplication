import { Module } from "@nestjs/common";
import { MhciSlateAppSchoolModuleBase } from "./base/mhciSlateAppSchool.module.base";
import { MhciSlateAppSchoolService } from "./mhciSlateAppSchool.service";
import { MhciSlateAppSchoolController } from "./mhciSlateAppSchool.controller";
import { MhciSlateAppSchoolResolver } from "./mhciSlateAppSchool.resolver";

@Module({
  imports: [MhciSlateAppSchoolModuleBase],
  controllers: [MhciSlateAppSchoolController],
  providers: [MhciSlateAppSchoolService, MhciSlateAppSchoolResolver],
  exports: [MhciSlateAppSchoolService],
})
export class MhciSlateAppSchoolModule {}
