import { Module } from "@nestjs/common";
import { ScsUserModuleBase } from "./base/scsUser.module.base";
import { ScsUserService } from "./scsUser.service";
import { ScsUserController } from "./scsUser.controller";
import { ScsUserResolver } from "./scsUser.resolver";

@Module({
  imports: [ScsUserModuleBase],
  controllers: [ScsUserController],
  providers: [ScsUserService, ScsUserResolver],
  exports: [ScsUserService],
})
export class ScsUserModule {}
