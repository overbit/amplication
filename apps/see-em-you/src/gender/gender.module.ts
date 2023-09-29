import { Module } from "@nestjs/common";
import { GenderModuleBase } from "./base/gender.module.base";
import { GenderService } from "./gender.service";
import { GenderController } from "./gender.controller";
import { GenderResolver } from "./gender.resolver";

@Module({
  imports: [GenderModuleBase],
  controllers: [GenderController],
  providers: [GenderService, GenderResolver],
  exports: [GenderService],
})
export class GenderModule {}
