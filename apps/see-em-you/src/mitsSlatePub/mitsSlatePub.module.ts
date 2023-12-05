import { Module } from "@nestjs/common";
import { MitsSlatePubModuleBase } from "./base/mitsSlatePub.module.base";
import { MitsSlatePubService } from "./mitsSlatePub.service";
import { MitsSlatePubController } from "./mitsSlatePub.controller";
import { MitsSlatePubResolver } from "./mitsSlatePub.resolver";

@Module({
  imports: [MitsSlatePubModuleBase],
  controllers: [MitsSlatePubController],
  providers: [MitsSlatePubService, MitsSlatePubResolver],
  exports: [MitsSlatePubService],
})
export class MitsSlatePubModule {}
