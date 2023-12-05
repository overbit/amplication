import { Module } from "@nestjs/common";
import { TesttableforBansheeModuleBase } from "./base/testtableforBanshee.module.base";
import { TesttableforBansheeService } from "./testtableforBanshee.service";
import { TesttableforBansheeController } from "./testtableforBanshee.controller";
import { TesttableforBansheeResolver } from "./testtableforBanshee.resolver";

@Module({
  imports: [TesttableforBansheeModuleBase],
  controllers: [TesttableforBansheeController],
  providers: [TesttableforBansheeService, TesttableforBansheeResolver],
  exports: [TesttableforBansheeService],
})
export class TesttableforBansheeModule {}
