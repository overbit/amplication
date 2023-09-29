import { Module } from "@nestjs/common";
import { ApplicationContentModuleBase } from "./base/applicationContent.module.base";
import { ApplicationContentService } from "./applicationContent.service";
import { ApplicationContentController } from "./applicationContent.controller";
import { ApplicationContentResolver } from "./applicationContent.resolver";

@Module({
  imports: [ApplicationContentModuleBase],
  controllers: [ApplicationContentController],
  providers: [ApplicationContentService, ApplicationContentResolver],
  exports: [ApplicationContentService],
})
export class ApplicationContentModule {}
