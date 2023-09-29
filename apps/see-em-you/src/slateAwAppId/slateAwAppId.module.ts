import { Module } from "@nestjs/common";
import { SlateAwAppIdModuleBase } from "./base/slateAwAppId.module.base";
import { SlateAwAppIdService } from "./slateAwAppId.service";
import { SlateAwAppIdController } from "./slateAwAppId.controller";
import { SlateAwAppIdResolver } from "./slateAwAppId.resolver";

@Module({
  imports: [SlateAwAppIdModuleBase],
  controllers: [SlateAwAppIdController],
  providers: [SlateAwAppIdService, SlateAwAppIdResolver],
  exports: [SlateAwAppIdService],
})
export class SlateAwAppIdModule {}
