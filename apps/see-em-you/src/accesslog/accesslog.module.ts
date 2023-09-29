import { Module } from "@nestjs/common";
import { AccesslogModuleBase } from "./base/accesslog.module.base";
import { AccesslogService } from "./accesslog.service";
import { AccesslogController } from "./accesslog.controller";
import { AccesslogResolver } from "./accesslog.resolver";

@Module({
  imports: [AccesslogModuleBase],
  controllers: [AccesslogController],
  providers: [AccesslogService, AccesslogResolver],
  exports: [AccesslogService],
})
export class AccesslogModule {}
