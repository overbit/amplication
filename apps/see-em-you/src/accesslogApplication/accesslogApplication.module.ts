import { Module } from "@nestjs/common";
import { AccesslogApplicationModuleBase } from "./base/accesslogApplication.module.base";
import { AccesslogApplicationService } from "./accesslogApplication.service";
import { AccesslogApplicationController } from "./accesslogApplication.controller";
import { AccesslogApplicationResolver } from "./accesslogApplication.resolver";

@Module({
  imports: [AccesslogApplicationModuleBase],
  controllers: [AccesslogApplicationController],
  providers: [AccesslogApplicationService, AccesslogApplicationResolver],
  exports: [AccesslogApplicationService],
})
export class AccesslogApplicationModule {}
