import { Module } from "@nestjs/common";
import { IniSupportingCourseworkKobeModuleBase } from "./base/iniSupportingCourseworkKobe.module.base";
import { IniSupportingCourseworkKobeService } from "./iniSupportingCourseworkKobe.service";
import { IniSupportingCourseworkKobeController } from "./iniSupportingCourseworkKobe.controller";
import { IniSupportingCourseworkKobeResolver } from "./iniSupportingCourseworkKobe.resolver";

@Module({
  imports: [IniSupportingCourseworkKobeModuleBase],
  controllers: [IniSupportingCourseworkKobeController],
  providers: [
    IniSupportingCourseworkKobeService,
    IniSupportingCourseworkKobeResolver,
  ],
  exports: [IniSupportingCourseworkKobeService],
})
export class IniSupportingCourseworkKobeModule {}
