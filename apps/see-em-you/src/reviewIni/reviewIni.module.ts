import { Module } from "@nestjs/common";
import { ReviewIniModuleBase } from "./base/reviewIni.module.base";
import { ReviewIniService } from "./reviewIni.service";
import { ReviewIniController } from "./reviewIni.controller";
import { ReviewIniResolver } from "./reviewIni.resolver";

@Module({
  imports: [ReviewIniModuleBase],
  controllers: [ReviewIniController],
  providers: [ReviewIniService, ReviewIniResolver],
  exports: [ReviewIniService],
})
export class ReviewIniModule {}
