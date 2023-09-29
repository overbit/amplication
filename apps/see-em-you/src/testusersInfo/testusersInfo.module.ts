import { Module } from "@nestjs/common";
import { TestusersInfoModuleBase } from "./base/testusersInfo.module.base";
import { TestusersInfoService } from "./testusersInfo.service";
import { TestusersInfoController } from "./testusersInfo.controller";
import { TestusersInfoResolver } from "./testusersInfo.resolver";

@Module({
  imports: [TestusersInfoModuleBase],
  controllers: [TestusersInfoController],
  providers: [TestusersInfoService, TestusersInfoResolver],
  exports: [TestusersInfoService],
})
export class TestusersInfoModule {}
