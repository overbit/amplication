import { Module } from "@nestjs/common";
import { RequestsAccessModuleBase } from "./base/requestsAccess.module.base";
import { RequestsAccessService } from "./requestsAccess.service";
import { RequestsAccessController } from "./requestsAccess.controller";
import { RequestsAccessResolver } from "./requestsAccess.resolver";

@Module({
  imports: [RequestsAccessModuleBase],
  controllers: [RequestsAccessController],
  providers: [RequestsAccessService, RequestsAccessResolver],
  exports: [RequestsAccessService],
})
export class RequestsAccessModule {}
