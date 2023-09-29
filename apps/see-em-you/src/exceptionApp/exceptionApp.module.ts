import { Module } from "@nestjs/common";
import { ExceptionAppModuleBase } from "./base/exceptionApp.module.base";
import { ExceptionAppService } from "./exceptionApp.service";
import { ExceptionAppController } from "./exceptionApp.controller";
import { ExceptionAppResolver } from "./exceptionApp.resolver";

@Module({
  imports: [ExceptionAppModuleBase],
  controllers: [ExceptionAppController],
  providers: [ExceptionAppService, ExceptionAppResolver],
  exports: [ExceptionAppService],
})
export class ExceptionAppModule {}
