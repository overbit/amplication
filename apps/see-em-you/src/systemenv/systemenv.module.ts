import { Module } from "@nestjs/common";
import { SystemenvModuleBase } from "./base/systemenv.module.base";
import { SystemenvService } from "./systemenv.service";
import { SystemenvController } from "./systemenv.controller";
import { SystemenvResolver } from "./systemenv.resolver";

@Module({
  imports: [SystemenvModuleBase],
  controllers: [SystemenvController],
  providers: [SystemenvService, SystemenvResolver],
  exports: [SystemenvService],
})
export class SystemenvModule {}
