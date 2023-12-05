import { Module } from "@nestjs/common";
import { DegreesallModuleBase } from "./base/degreesall.module.base";
import { DegreesallService } from "./degreesall.service";
import { DegreesallController } from "./degreesall.controller";
import { DegreesallResolver } from "./degreesall.resolver";

@Module({
  imports: [DegreesallModuleBase],
  controllers: [DegreesallController],
  providers: [DegreesallService, DegreesallResolver],
  exports: [DegreesallService],
})
export class DegreesallModule {}
