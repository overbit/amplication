import { Module } from "@nestjs/common";
import { LuApplicationInterestModuleBase } from "./base/luApplicationInterest.module.base";
import { LuApplicationInterestService } from "./luApplicationInterest.service";
import { LuApplicationInterestController } from "./luApplicationInterest.controller";
import { LuApplicationInterestResolver } from "./luApplicationInterest.resolver";

@Module({
  imports: [LuApplicationInterestModuleBase],
  controllers: [LuApplicationInterestController],
  providers: [LuApplicationInterestService, LuApplicationInterestResolver],
  exports: [LuApplicationInterestService],
})
export class LuApplicationInterestModule {}
