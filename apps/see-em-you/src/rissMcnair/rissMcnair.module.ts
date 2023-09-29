import { Module } from "@nestjs/common";
import { RissMcnairModuleBase } from "./base/rissMcnair.module.base";
import { RissMcnairService } from "./rissMcnair.service";
import { RissMcnairController } from "./rissMcnair.controller";
import { RissMcnairResolver } from "./rissMcnair.resolver";

@Module({
  imports: [RissMcnairModuleBase],
  controllers: [RissMcnairController],
  providers: [RissMcnairService, RissMcnairResolver],
  exports: [RissMcnairService],
})
export class RissMcnairModule {}
