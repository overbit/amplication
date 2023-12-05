import { Module } from "@nestjs/common";
import { SlateEmail2AwUserModuleBase } from "./base/slateEmail2AwUser.module.base";
import { SlateEmail2AwUserService } from "./slateEmail2AwUser.service";
import { SlateEmail2AwUserController } from "./slateEmail2AwUser.controller";
import { SlateEmail2AwUserResolver } from "./slateEmail2AwUser.resolver";

@Module({
  imports: [SlateEmail2AwUserModuleBase],
  controllers: [SlateEmail2AwUserController],
  providers: [SlateEmail2AwUserService, SlateEmail2AwUserResolver],
  exports: [SlateEmail2AwUserService],
})
export class SlateEmail2AwUserModule {}
