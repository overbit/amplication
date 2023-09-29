import { Module } from "@nestjs/common";
import { MitsSlateRecommend3ModuleBase } from "./base/mitsSlateRecommend3.module.base";
import { MitsSlateRecommend3Service } from "./mitsSlateRecommend3.service";
import { MitsSlateRecommend3Controller } from "./mitsSlateRecommend3.controller";
import { MitsSlateRecommend3Resolver } from "./mitsSlateRecommend3.resolver";

@Module({
  imports: [MitsSlateRecommend3ModuleBase],
  controllers: [MitsSlateRecommend3Controller],
  providers: [MitsSlateRecommend3Service, MitsSlateRecommend3Resolver],
  exports: [MitsSlateRecommend3Service],
})
export class MitsSlateRecommend3Module {}
