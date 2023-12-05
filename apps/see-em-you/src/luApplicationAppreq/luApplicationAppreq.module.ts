import { Module } from "@nestjs/common";
import { LuApplicationAppreqModuleBase } from "./base/luApplicationAppreq.module.base";
import { LuApplicationAppreqService } from "./luApplicationAppreq.service";
import { LuApplicationAppreqController } from "./luApplicationAppreq.controller";
import { LuApplicationAppreqResolver } from "./luApplicationAppreq.resolver";

@Module({
  imports: [LuApplicationAppreqModuleBase],
  controllers: [LuApplicationAppreqController],
  providers: [LuApplicationAppreqService, LuApplicationAppreqResolver],
  exports: [LuApplicationAppreqService],
})
export class LuApplicationAppreqModule {}
