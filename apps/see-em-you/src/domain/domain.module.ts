import { Module } from "@nestjs/common";
import { DomainModuleBase } from "./base/domain.module.base";
import { DomainService } from "./domain.service";
import { DomainController } from "./domain.controller";
import { DomainResolver } from "./domain.resolver";

@Module({
  imports: [DomainModuleBase],
  controllers: [DomainController],
  providers: [DomainService, DomainResolver],
  exports: [DomainService],
})
export class DomainModule {}
