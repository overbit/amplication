import { Module } from "@nestjs/common";
import { VeteranInfoModuleBase } from "./base/veteranInfo.module.base";
import { VeteranInfoService } from "./veteranInfo.service";
import { VeteranInfoController } from "./veteranInfo.controller";
import { VeteranInfoResolver } from "./veteranInfo.resolver";

@Module({
  imports: [VeteranInfoModuleBase],
  controllers: [VeteranInfoController],
  providers: [VeteranInfoService, VeteranInfoResolver],
  exports: [VeteranInfoService],
})
export class VeteranInfoModule {}
