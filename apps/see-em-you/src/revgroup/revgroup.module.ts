import { Module } from "@nestjs/common";
import { RevgroupModuleBase } from "./base/revgroup.module.base";
import { RevgroupService } from "./revgroup.service";
import { RevgroupController } from "./revgroup.controller";
import { RevgroupResolver } from "./revgroup.resolver";

@Module({
  imports: [RevgroupModuleBase],
  controllers: [RevgroupController],
  providers: [RevgroupService, RevgroupResolver],
  exports: [RevgroupService],
})
export class RevgroupModule {}
