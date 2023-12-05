import { Module } from "@nestjs/common";
import { SlatePubModuleBase } from "./base/slatePub.module.base";
import { SlatePubService } from "./slatePub.service";
import { SlatePubController } from "./slatePub.controller";
import { SlatePubResolver } from "./slatePub.resolver";

@Module({
  imports: [SlatePubModuleBase],
  controllers: [SlatePubController],
  providers: [SlatePubService, SlatePubResolver],
  exports: [SlatePubService],
})
export class SlatePubModule {}
