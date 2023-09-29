import { Module } from "@nestjs/common";
import { ToeflModuleBase } from "./base/toefl.module.base";
import { ToeflService } from "./toefl.service";
import { ToeflController } from "./toefl.controller";
import { ToeflResolver } from "./toefl.resolver";

@Module({
  imports: [ToeflModuleBase],
  controllers: [ToeflController],
  providers: [ToeflService, ToeflResolver],
  exports: [ToeflService],
})
export class ToeflModule {}
