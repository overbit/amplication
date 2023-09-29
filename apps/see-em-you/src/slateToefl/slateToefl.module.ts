import { Module } from "@nestjs/common";
import { SlateToeflModuleBase } from "./base/slateToefl.module.base";
import { SlateToeflService } from "./slateToefl.service";
import { SlateToeflController } from "./slateToefl.controller";
import { SlateToeflResolver } from "./slateToefl.resolver";

@Module({
  imports: [SlateToeflModuleBase],
  controllers: [SlateToeflController],
  providers: [SlateToeflService, SlateToeflResolver],
  exports: [SlateToeflService],
})
export class SlateToeflModule {}
