import { Module } from "@nestjs/common";
import { SlateLangCodeModuleBase } from "./base/slateLangCode.module.base";
import { SlateLangCodeService } from "./slateLangCode.service";
import { SlateLangCodeController } from "./slateLangCode.controller";
import { SlateLangCodeResolver } from "./slateLangCode.resolver";

@Module({
  imports: [SlateLangCodeModuleBase],
  controllers: [SlateLangCodeController],
  providers: [SlateLangCodeService, SlateLangCodeResolver],
  exports: [SlateLangCodeService],
})
export class SlateLangCodeModule {}
