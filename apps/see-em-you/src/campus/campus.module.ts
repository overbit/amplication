import { Module } from "@nestjs/common";
import { CampusModuleBase } from "./base/campus.module.base";
import { CampusService } from "./campus.service";
import { CampusController } from "./campus.controller";
import { CampusResolver } from "./campus.resolver";

@Module({
  imports: [CampusModuleBase],
  controllers: [CampusController],
  providers: [CampusService, CampusResolver],
  exports: [CampusService],
})
export class CampusModule {}
