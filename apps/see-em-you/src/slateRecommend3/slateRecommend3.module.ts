import { Module } from "@nestjs/common";
import { SlateRecommend3ModuleBase } from "./base/slateRecommend3.module.base";
import { SlateRecommend3Service } from "./slateRecommend3.service";
import { SlateRecommend3Controller } from "./slateRecommend3.controller";
import { SlateRecommend3Resolver } from "./slateRecommend3.resolver";

@Module({
  imports: [SlateRecommend3ModuleBase],
  controllers: [SlateRecommend3Controller],
  providers: [SlateRecommend3Service, SlateRecommend3Resolver],
  exports: [SlateRecommend3Service],
})
export class SlateRecommend3Module {}
