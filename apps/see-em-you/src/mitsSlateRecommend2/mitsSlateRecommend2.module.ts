import { Module } from "@nestjs/common";
import { MitsSlateRecommend2ModuleBase } from "./base/mitsSlateRecommend2.module.base";
import { MitsSlateRecommend2Service } from "./mitsSlateRecommend2.service";
import { MitsSlateRecommend2Controller } from "./mitsSlateRecommend2.controller";
import { MitsSlateRecommend2Resolver } from "./mitsSlateRecommend2.resolver";

@Module({
  imports: [MitsSlateRecommend2ModuleBase],
  controllers: [MitsSlateRecommend2Controller],
  providers: [MitsSlateRecommend2Service, MitsSlateRecommend2Resolver],
  exports: [MitsSlateRecommend2Service],
})
export class MitsSlateRecommend2Module {}
