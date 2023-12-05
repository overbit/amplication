import { Module } from "@nestjs/common";
import { AccesslogreplyformModuleBase } from "./base/accesslogreplyform.module.base";
import { AccesslogreplyformService } from "./accesslogreplyform.service";
import { AccesslogreplyformController } from "./accesslogreplyform.controller";
import { AccesslogreplyformResolver } from "./accesslogreplyform.resolver";

@Module({
  imports: [AccesslogreplyformModuleBase],
  controllers: [AccesslogreplyformController],
  providers: [AccesslogreplyformService, AccesslogreplyformResolver],
  exports: [AccesslogreplyformService],
})
export class AccesslogreplyformModule {}
