import { Module } from "@nestjs/common";
import { MitsSlateAppSchoolModuleBase } from "./base/mitsSlateAppSchool.module.base";
import { MitsSlateAppSchoolService } from "./mitsSlateAppSchool.service";
import { MitsSlateAppSchoolController } from "./mitsSlateAppSchool.controller";
import { MitsSlateAppSchoolResolver } from "./mitsSlateAppSchool.resolver";

@Module({
  imports: [MitsSlateAppSchoolModuleBase],
  controllers: [MitsSlateAppSchoolController],
  providers: [MitsSlateAppSchoolService, MitsSlateAppSchoolResolver],
  exports: [MitsSlateAppSchoolService],
})
export class MitsSlateAppSchoolModule {}
