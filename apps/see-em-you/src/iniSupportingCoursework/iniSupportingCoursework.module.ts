import { Module } from "@nestjs/common";
import { IniSupportingCourseworkModuleBase } from "./base/iniSupportingCoursework.module.base";
import { IniSupportingCourseworkService } from "./iniSupportingCoursework.service";
import { IniSupportingCourseworkController } from "./iniSupportingCoursework.controller";
import { IniSupportingCourseworkResolver } from "./iniSupportingCoursework.resolver";

@Module({
  imports: [IniSupportingCourseworkModuleBase],
  controllers: [IniSupportingCourseworkController],
  providers: [IniSupportingCourseworkService, IniSupportingCourseworkResolver],
  exports: [IniSupportingCourseworkService],
})
export class IniSupportingCourseworkModule {}
