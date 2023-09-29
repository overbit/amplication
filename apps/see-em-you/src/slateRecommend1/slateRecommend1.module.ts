import { Module } from "@nestjs/common";
import { SlateRecommend1ModuleBase } from "./base/slateRecommend1.module.base";
import { SlateRecommend1Service } from "./slateRecommend1.service";
import { SlateRecommend1Controller } from "./slateRecommend1.controller";
import { SlateRecommend1Resolver } from "./slateRecommend1.resolver";

@Module({
  imports: [SlateRecommend1ModuleBase],
  controllers: [SlateRecommend1Controller],
  providers: [SlateRecommend1Service, SlateRecommend1Resolver],
  exports: [SlateRecommend1Service],
})
export class SlateRecommend1Module {}
