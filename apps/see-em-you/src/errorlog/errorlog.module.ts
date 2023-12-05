import { Module } from "@nestjs/common";
import { ErrorlogModuleBase } from "./base/errorlog.module.base";
import { ErrorlogService } from "./errorlog.service";
import { ErrorlogController } from "./errorlog.controller";
import { ErrorlogResolver } from "./errorlog.resolver";

@Module({
  imports: [ErrorlogModuleBase],
  controllers: [ErrorlogController],
  providers: [ErrorlogService, ErrorlogResolver],
  exports: [ErrorlogService],
})
export class ErrorlogModule {}
