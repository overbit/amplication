import { Module } from "@nestjs/common";
import { LuApplicationAdvisorModuleBase } from "./base/luApplicationAdvisor.module.base";
import { LuApplicationAdvisorService } from "./luApplicationAdvisor.service";
import { LuApplicationAdvisorController } from "./luApplicationAdvisor.controller";
import { LuApplicationAdvisorResolver } from "./luApplicationAdvisor.resolver";

@Module({
  imports: [LuApplicationAdvisorModuleBase],
  controllers: [LuApplicationAdvisorController],
  providers: [LuApplicationAdvisorService, LuApplicationAdvisorResolver],
  exports: [LuApplicationAdvisorService],
})
export class LuApplicationAdvisorModule {}
