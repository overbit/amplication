import { Module } from "@nestjs/common";
import { GpascaleModuleBase } from "./base/gpascale.module.base";
import { GpascaleService } from "./gpascale.service";
import { GpascaleController } from "./gpascale.controller";
import { GpascaleResolver } from "./gpascale.resolver";

@Module({
  imports: [GpascaleModuleBase],
  controllers: [GpascaleController],
  providers: [GpascaleService, GpascaleResolver],
  exports: [GpascaleService],
})
export class GpascaleModule {}
