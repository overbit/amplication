import { Module } from "@nestjs/common";
import { MultiprogramlockoutModuleBase } from "./base/multiprogramlockout.module.base";
import { MultiprogramlockoutService } from "./multiprogramlockout.service";
import { MultiprogramlockoutController } from "./multiprogramlockout.controller";
import { MultiprogramlockoutResolver } from "./multiprogramlockout.resolver";

@Module({
  imports: [MultiprogramlockoutModuleBase],
  controllers: [MultiprogramlockoutController],
  providers: [MultiprogramlockoutService, MultiprogramlockoutResolver],
  exports: [MultiprogramlockoutService],
})
export class MultiprogramlockoutModule {}
