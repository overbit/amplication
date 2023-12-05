import { Module } from "@nestjs/common";
import { LuApplicationEtsgreModuleBase } from "./base/luApplicationEtsgre.module.base";
import { LuApplicationEtsgreService } from "./luApplicationEtsgre.service";
import { LuApplicationEtsgreController } from "./luApplicationEtsgre.controller";
import { LuApplicationEtsgreResolver } from "./luApplicationEtsgre.resolver";

@Module({
  imports: [LuApplicationEtsgreModuleBase],
  controllers: [LuApplicationEtsgreController],
  providers: [LuApplicationEtsgreService, LuApplicationEtsgreResolver],
  exports: [LuApplicationEtsgreService],
})
export class LuApplicationEtsgreModule {}
