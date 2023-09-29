import { Module } from "@nestjs/common";
import { CcAuthNotificationModuleBase } from "./base/ccAuthNotification.module.base";
import { CcAuthNotificationService } from "./ccAuthNotification.service";
import { CcAuthNotificationController } from "./ccAuthNotification.controller";
import { CcAuthNotificationResolver } from "./ccAuthNotification.resolver";

@Module({
  imports: [CcAuthNotificationModuleBase],
  controllers: [CcAuthNotificationController],
  providers: [CcAuthNotificationService, CcAuthNotificationResolver],
  exports: [CcAuthNotificationService],
})
export class CcAuthNotificationModule {}
