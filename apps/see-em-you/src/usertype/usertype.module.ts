import { Module } from "@nestjs/common";
import { UsertypeModuleBase } from "./base/usertype.module.base";
import { UsertypeService } from "./usertype.service";
import { UsertypeController } from "./usertype.controller";
import { UsertypeResolver } from "./usertype.resolver";

@Module({
  imports: [UsertypeModuleBase],
  controllers: [UsertypeController],
  providers: [UsertypeService, UsertypeResolver],
  exports: [UsertypeService],
})
export class UsertypeModule {}
