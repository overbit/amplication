import { Module } from "@nestjs/common";
import { SlateMaterialModuleBase } from "./base/slateMaterial.module.base";
import { SlateMaterialService } from "./slateMaterial.service";
import { SlateMaterialController } from "./slateMaterial.controller";
import { SlateMaterialResolver } from "./slateMaterial.resolver";

@Module({
  imports: [SlateMaterialModuleBase],
  controllers: [SlateMaterialController],
  providers: [SlateMaterialService, SlateMaterialResolver],
  exports: [SlateMaterialService],
})
export class SlateMaterialModule {}
