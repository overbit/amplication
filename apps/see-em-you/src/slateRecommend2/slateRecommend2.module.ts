import { Module } from "@nestjs/common";
import { SlateRecommend2ModuleBase } from "./base/slateRecommend2.module.base";
import { SlateRecommend2Service } from "./slateRecommend2.service";
import { SlateRecommend2Controller } from "./slateRecommend2.controller";
import { SlateRecommend2Resolver } from "./slateRecommend2.resolver";

@Module({
  imports: [SlateRecommend2ModuleBase],
  controllers: [SlateRecommend2Controller],
  providers: [SlateRecommend2Service, SlateRecommend2Resolver],
  exports: [SlateRecommend2Service],
})
export class SlateRecommend2Module {}
