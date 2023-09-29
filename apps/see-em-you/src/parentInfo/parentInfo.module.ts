import { Module } from "@nestjs/common";
import { ParentInfoModuleBase } from "./base/parentInfo.module.base";
import { ParentInfoService } from "./parentInfo.service";
import { ParentInfoController } from "./parentInfo.controller";
import { ParentInfoResolver } from "./parentInfo.resolver";

@Module({
  imports: [ParentInfoModuleBase],
  controllers: [ParentInfoController],
  providers: [ParentInfoService, ParentInfoResolver],
  exports: [ParentInfoService],
})
export class ParentInfoModule {}
