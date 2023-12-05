import { Module } from "@nestjs/common";
import { DietrichSharingModuleBase } from "./base/dietrichSharing.module.base";
import { DietrichSharingService } from "./dietrichSharing.service";
import { DietrichSharingController } from "./dietrichSharing.controller";
import { DietrichSharingResolver } from "./dietrichSharing.resolver";

@Module({
  imports: [DietrichSharingModuleBase],
  controllers: [DietrichSharingController],
  providers: [DietrichSharingService, DietrichSharingResolver],
  exports: [DietrichSharingService],
})
export class DietrichSharingModule {}
