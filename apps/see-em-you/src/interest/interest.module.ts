import { Module } from "@nestjs/common";
import { InterestModuleBase } from "./base/interest.module.base";
import { InterestService } from "./interest.service";
import { InterestController } from "./interest.controller";
import { InterestResolver } from "./interest.resolver";

@Module({
  imports: [InterestModuleBase],
  controllers: [InterestController],
  providers: [InterestService, InterestResolver],
  exports: [InterestService],
})
export class InterestModule {}
