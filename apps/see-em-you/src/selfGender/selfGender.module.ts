import { Module } from "@nestjs/common";
import { SelfGenderModuleBase } from "./base/selfGender.module.base";
import { SelfGenderService } from "./selfGender.service";
import { SelfGenderController } from "./selfGender.controller";
import { SelfGenderResolver } from "./selfGender.resolver";

@Module({
  imports: [SelfGenderModuleBase],
  controllers: [SelfGenderController],
  providers: [SelfGenderService, SelfGenderResolver],
  exports: [SelfGenderService],
})
export class SelfGenderModule {}
