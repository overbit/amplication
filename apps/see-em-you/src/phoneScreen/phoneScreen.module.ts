import { Module } from "@nestjs/common";
import { PhoneScreenModuleBase } from "./base/phoneScreen.module.base";
import { PhoneScreenService } from "./phoneScreen.service";
import { PhoneScreenController } from "./phoneScreen.controller";
import { PhoneScreenResolver } from "./phoneScreen.resolver";

@Module({
  imports: [PhoneScreenModuleBase],
  controllers: [PhoneScreenController],
  providers: [PhoneScreenService, PhoneScreenResolver],
  exports: [PhoneScreenService],
})
export class PhoneScreenModule {}
