import { Module } from "@nestjs/common";
import { MseSupportingCourseworkModuleBase } from "./base/mseSupportingCoursework.module.base";
import { MseSupportingCourseworkService } from "./mseSupportingCoursework.service";
import { MseSupportingCourseworkController } from "./mseSupportingCoursework.controller";
import { MseSupportingCourseworkResolver } from "./mseSupportingCoursework.resolver";

@Module({
  imports: [MseSupportingCourseworkModuleBase],
  controllers: [MseSupportingCourseworkController],
  providers: [MseSupportingCourseworkService, MseSupportingCourseworkResolver],
  exports: [MseSupportingCourseworkService],
})
export class MseSupportingCourseworkModule {}
